/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StatusBar, StyleSheet, View } from 'react-native';
 import GoogleButton from './screens/GoogleButton';
 
 export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <GoogleButton />
    </View>
  );
}
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     flex: 1,
   },
 });
