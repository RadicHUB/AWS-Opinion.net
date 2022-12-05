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
import Tabs from '../routes/tabs';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import ConfirmSigup from './components/ConfirmSignUp';
import ChangePassword from './components/ChangePassword';

// Development Import Screens
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

// ProtoType Import Screen
// import ProtoType from './screens/ProtoType';

Amplify.configure(awsconfig);

// FOR DEVs chnage the screen import to change page

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
      return <Tabs />;
    default:
      return <></>;
  }
};

export const AppWithNavigationContainer = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AuthScreens />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeScreenConatainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


