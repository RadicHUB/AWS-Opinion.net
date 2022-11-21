/**
 * @format
 * @flow strict-local
 */

// DO NOT TOUCH OR DELETE
import '@azure/core-asynciterator-polyfill';
import {name as appName} from './app.json';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsconfig from './src/aws-exports';

// For react-native
import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Button,
  Text,
  Linking,
  ScrollView,
} from 'react-native';
import {AppRegistry} from 'react-native';

// Necessary imports for Authentication
import {Authenticator, withOAuth} from 'aws-amplify-react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

// Authentication Import Screens
import SignIn from './src_auth/components/SignIn';
import SignUp from './src_auth/components/SignUp';
import ForgotPassword from './src_auth/components/ForgotPassword';
import ConfirmSigup from './src_auth/components/ConfirmSignUp';
import ChangePassword from './src_auth/components/ChangePassword';

// Development Import Screens
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

// ProtoType Import Screen
// import ProtoType from './screens/ProtoType';

Amplify.configure(awsconfig);

// FOR DEVs chnage the screen import to change page
function OpeningStack(props) {
  return (
    <View>
      <HomeScreen />
    </View>
  );
}

const AuthScreens = props => {
  console.log('props', props.authState);
  switch (props.authState) {
    case 'signIn':
      return <SignIn {...props} />;
    case 'signUp':
      return <SignUp {...props} />;
    case 'forgotPassword':
      return <ForgotPassword {...props} />;
    case 'confirmSignUp':
      return <ConfirmSigup {...props} />;
    case 'changePassword':
      return <ChangePassword {...props} />;
    case 'signedIn':
      return <OpeningStack />;
    default:
      return <></>;
  }
};

const AppWithNavigationContainer = () => {
  return (
    <View style={styles.container}>
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signUp">
        <AuthScreens />
      </Authenticator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent(appName, () => AppWithNavigationContainer);
