import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from "../screens/SettingScreen";

{/**
    The pages will be loaded from the TAB component, which is this file, instead of being called from app.js

    This formation can hold a maximum of 5 pages in the bottom tab
*/}

const Tab = createBottomTabNavigator();

const shadowStyle = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5, 
        elevation: 5
    }
});

{/**   Adding new tabs here   */}
const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                zIndex: -1,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#EEF5FC',
                    borderRadius: 15,
                    height: 90,
                    ... shadowStyle.shadow
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{color: focused ? '#1A45B1' : '#000', height: 40, width: 40}} source={require('./images/home.png')}></Image>
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> HOME</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name='My Account' component={ SettingScreen } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{color: focused ? '#1A45B1' : '#000', height: 40, width: 40}} source={require('./images/person.png')}></Image>
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> ACCOUNT </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs; 