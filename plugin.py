import logging
import os
import re

from mkdocs.config import config_options
from mkdocs.plugins import BasePlugin

from github import Github, GithubException

LOG = logging.getLogger(__name__)

# These are things that match incorrectly that actually could hit real
# names in github, so we reject them early.
REJECT_LIST = ('@ibm', '@us', '@sha256')
LINK_TEMPLATE = '<a href="%s">%s</a>'


class GHMentionsPlugin(BasePlugin):

    config_scheme = (
        ('enterprise_hostname', config_options.Type(str, default='')),
        ('token', config_options.Type(str, default='')),
    )

    def __init__(self):
        self.enabled = False
        self.total_time = 0
        self.users = {}

    def on_config(self, config):
        if 'GITHUB_TOKEN' in os.environ:
            self.config['token'] = os.environ['GITHUB_TOKEN']
        if self.config['token'] and self.config['token'] != '':
            self.enabled = True
            if self.config['enterprise_hostname']:
                url = "https://%s/api/v3" % self.config['enterprise_hostname']
                self.github = Github(base_url=url,
                                     login_or_token=self.config['token'])
            else:
                self.github = Github(self.config['token'])
            LOG.info("Enabled gh-mentions plugin")
        else:
            LOG.warning("gh-mentions plugin DISABLED: no git token provided")
        return config

    def lookup_user(self, username):
        """Lookup the user in github.

        Reject early if in reject list. And keep a cache to minimize
        calls to github.

        """
        if username in REJECT_LIST:
            LOG.debug("Rejected user: %s", username)
            return

        un = username[1:]
        if un in self.users:
            return self.users[un]
        try:
            user = self.github.get_user(login=un)
            self.users[un] = user
            LOG.debug("Found user %s", user)
            return user
        except GithubException:
            LOG.info("User %s not found", un)

    def on_post_page(self, output, page, config):
        """Process cleanup conversions on post page render.

        The macro rendering happens at an inconvenient time for us to
        be able to inject the mentions links. So we end up with
        markdown links in HTML that don't work. This takes a final
        pass through the content and converts those all.
        """
        if not self.enabled:
            return output

        username_re = r'(\@[a-zA-z\-\d+]+)'
        usernames = re.findall(username_re, output)
        found_users = []
        for user in usernames:
            u = self.lookup_user(user)
            if u:
                found_users.append(u)

        for found in found_users:
            output = re.sub(r'@%s' % found.login,
                              LINK_TEMPLATE % (found.html_url, found.name),
                              output)
        return output
