/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ProtoType from './screens/ProtoType';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';

 
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./routes/tabs";

export default function App() {
    return (
        <NavigationContainer>
          <View style={styles.container}>
            <Tabs />
          </View>
          </NavigationContainer>
    );
}

//  export default function App() {
//    return (
//      
//        <StatusBar />
//        <HomeScreen />
//      </View>
//    );
//  }
 
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     flex: 1,
   },
 });
