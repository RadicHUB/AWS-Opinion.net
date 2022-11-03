/**
 * @format
 */

import '@azure/core-asynciterator-polyfill';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

// check if env is localhost or not
// if you're not developing on localhost, you will need to detect this is another way—the docs linked above give some examples. 
const isLocalhost = !!(window.location.hostname === "localhost");

// split redirect signin and signout strings into correct URIs
const [
productionRedirectSignIn,
localRedirectSignIn ] = awsconfig.oauth.redirectSignIn.split(",");
const [
productionRedirectSignOut,
localRedirectSignOut ] = awsconfig.oauth.redirectSignOut.split(",");

// use correct URI in the right env
const updatedAwsConfig = {
...awsconfig,
oauth: {
...awsconfig.oauth,
redirectSignIn: isLocalhost 
    ? localRedirectSignIn 
    : productionRedirectSignIn,
redirectSignOut: isLocalhost 
    ? localRedirectSignOut 
    : productionRedirectSignOut, }
}

Amplify.configure(updatedAwsConfig);

AppRegistry.registerComponent(appName, () => App);
