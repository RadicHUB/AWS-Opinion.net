/**
 * @format
 */

// For react-native
import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View, Button, Text, Linking, ScrollView,} from 'react-native';
import {AppRegistry} from 'react-native';

// Necessary imports for Authentication
import {Authenticator, withOAuth} from 'aws-amplify-react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

// Authentication Import Screens
// import SignIn from './src_auth/components/SignIn';
// import SignUp from './src_auth/components/SignUp';
// import ForgotPassword from './src_auth/components/ForgotPassword';
// import ConfirmSigup from './src_auth/components/ConfirmSignUp';
// import ChangePassword from './src_auth/components/ChangePassword';

// Development Import Screens
// import HomeScreen from './screens/HomeScreen';
// import SettingScreen from './screens/SettingScreen';

// ProtoType Import Screen
// import ProtoType from './screens/ProtoType';

const SettingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.intro}> Opinion.Net</Text>
        <Text style={styles.title}> Settings</Text>
        <View style={[styles.box, {backgroundColor: '#ffffff'}]}>
          <View style={[styles.profilePicture, {backgroundColor: 'gray'}]}>
            <Text>Picture</Text>
          </View>
          <Text style={styles.intro}> Anonymous Username Identifier: </Text>
          <Text style={styles.intro}>
            {' '}
            1c84fb90-12c4-11e1-840d-7b25c5ee775h{' '}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="Institution" color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => {}} title="About" color="#841584" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => Auth.signOut()} title="Logout" color="#841584" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
  intro: {
    margin: 5,
    textAlign: 'center',
  },
  title: {
    margin: 20,
  },
  box: {
    margin: 20,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
  },
  profilePicture: {
    margin: 20,
    height: 50,
    width: 50,
  },
});
