import React from 'react';
import { Auth } from 'aws-amplify';
import btn from '../Assets/GoogleButton.png';

const GoogleButton = () => {
return (
<button onClick={() => Auth.federatedSignIn({ provider:"Google" })}>
<img src={btn} alt="Google Sign In button"
     className="GoogleButton"
     style={{height:"45px", width:"190px"}}/>
</button>
);
}
export default GoogleButton;