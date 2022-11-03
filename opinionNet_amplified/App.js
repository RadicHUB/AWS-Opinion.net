/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, StyleSheet, View, useEffect, useState } from 'react-native';
import { Hub, Auth } from 'aws-amplify';
import { Loader } from 'skylight-react';
import 'skylight-react/dist/skylight.css';
import ProtoType from './screens/ProtoType';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import LoggedIn from './screens/LoggedIn';
import Landing from './screens/Landing';
import GoogleButton from './screens/GoogleButton';
 
function App() {
  // init state to store user and show loader 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // get user
  async function getUser() {
  try {
  const token = await Auth.currentAuthenticatedUser();
     setLoading(false);
     setUser(token);
  } catch(err) {
     console.log(err);
     setLoading(false);
     }
  }
  //listen for sign in + out events, if neither are happening check if user exists 
  useEffect(() => {
  Hub.listen('auth', ({ payload }) => {
     if (payload.event === 'signIn') {
        return getUser();
  }
     if (payload.event === 'signOut') {
        setUser(null);
        return setLoading(false);
       }
  });
  getUser();
  }, []);
  
  // show loading screen while fetching, otherwise return page
  if(loading) return <Loader/>
  return (
  <div className="App">
    {user
       ? <LoggedIn email={user.attributes.email}/>
       : <Landing/>}
  </div>
  )};
  export default (App);