/**
 * @format
 */

// DO NOT TOUCH OR DELETE
import '@azure/core-asynciterator-polyfill';
import {name as appName} from './app.json';
import Amplify, {Auth, Hub} from 'aws-amplify';
import awsconfig from './src/aws-exports';

// For react-native
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View, Button, Text, Linking, ScrollView,} from 'react-native';
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

async function urlOperner(url, redirectUrl) {
  await InAppBrowser.isAvailable();
  const {type, url: newUrl} = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (type === 'success') {
    Linking.openURL(newUrl);
  }
}

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOperner,
  },
});

// function Home(props) {
//   return (
//     <View>
//       <Text>Welcome</Text>
//       <Button title="Sign Out" onPress={() => Auth.signOut()} />
//     </View>
//   );
// }

function Home(props) {
  return (
    <View>
      <SettingScreen />
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
      return <Home />;
    default:
      return <></>;
  }
};

const AppWithNavigationContainer = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign In failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  const {googleSignIn} = props;
  return (
    <View style={styles.container}>
      {user ? (
        <Button title="SignOut" onPress={() => Auth.signOut()} />
      ) : (
        <>
          <Authenticator
            usernameAttributes="email"
            hideDefault={true}
            authState="signUp">
            <AuthScreens />
          </Authenticator>
          <View style={{marginBottom: 200}}>
            <Button title="Continue with Google" onPress={googleSignIn} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent(appName, () =>
  withOAuth(AppWithNavigationContainer),
);
