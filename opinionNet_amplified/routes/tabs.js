import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from "../screens/SettingScreen";

{/**

    The pages will be loaded from the TAB component, which is this file, instead of being called from app.js

    To add new pages to the tab bar, copy and paste the first tab I wrote right after itself, and before the post tab, 
    or one can be added right after the post tab, before the account tab

    This formation can hold a maximum of 5 pages in the bottom tab, 
    if more are needed you can change the css to make the images smaller, 
    but you would also need to change the size of the container

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

{/** This is for the custom post button once a page is created and added to here */}
const CustomPostButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ... shadowStyle.shadow
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

{/**   Adding new tabs are done here   */}
const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
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
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> HOME </Text>
                    </View>
                )
            }}/>

            {/** Once a 'create post' page is made, import it up top and put the imported screen in the component part of Tab.Screen */}

            {/** <Tab.Screen name='Create Post' component={ IMPORTED COMPONENT GOES HERE } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <AntDesign name="pluscircle" size={60} style={{color: focused ? '#1A45B1' : '#000'}} /> 
                ),
                tabBarButton: (props) => (
                    <CustomPostButton {... props} />
                )
            }}/> */}

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