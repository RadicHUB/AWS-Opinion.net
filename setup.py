from setuptools import setup, find_packages


setup(
    name='mkdocs-gh-mentions-plugin',
    version='1.0.0',
    description='A MkDocs plugin to create link github @mentions',
    long_description='The gh-mentions links github mentions to user profiles',
    keywords='mkdocs github',
    url='',
    author='Sean Dague',
    author_email='sean.dague@ibm.com',
    license='MIT',
    python_requires='>=3.5',
    install_requires=[
        'PyGithub>=1.43',
        'mkdocs>=0.17'
    ],
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Intended Audience :: Information Technology',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3 :: Only',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7'
    ],
    packages=find_packages(),
    entry_points={
        'mkdocs.plugins': [
            'gh-mentions = mkdocs_gh_mentions_plugin.plugin:GHMentionsPlugin'
        ]
    }
)
