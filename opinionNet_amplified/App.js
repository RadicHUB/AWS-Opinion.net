/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Authenticator} from 'aws-amplify-react-native';

import Stack from './src_auth/stack';

export default function App() {
  /*return (
      <Authenticator
        usernameAttributes="email"
        hideDefault={true}
        authState="signUp">
        <Stack />
      </Authenticator>
  );
}
*/
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack />
      </View>
    </NavigationContainer>
  );
}

//  export default function App() {
//    return (
//     <View style={styles.container}>
//        <StatusBar />
//        <HomeScreen />
//      </View>
//    );
//  }

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
