import React from 'react';
import GoogleButton from '../auth/GoogleButton';
import { Flex } from 'skylight-react';
const Landing = () => {
return (
<Flex column center middle gap={1} height="100vh" width="100%">
<h3>Authenticate to continue</h3>
<GoogleButton/>
</Flex>);
}
export default Landing;