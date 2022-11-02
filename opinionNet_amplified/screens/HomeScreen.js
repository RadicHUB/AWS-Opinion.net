import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.horizontal}>
            <View style={styles.homescreen}>
                <View style={styles.homepagedesign}>
                    <View style={styles.frame106}>
                    <View style={styles.new}>
                        <Button onPress={() => {}} title="New" color="#841584"/>
                    </View>
                    <View style={styles.popular}>
                        <Button onPress={() => {}} title="Popular" color="#fff" />
                    </View>
                    <View style={styles.positive}>
                        <Button onPress={() => {}} title="Positive" color="#fff" />
                    </View>
                    <View style={styles.negative}> 
                        <Button onPress={() => {}} title="Negative" color="#841584" />
                    </View>
                </View>
            <View style={styles.title}>
            <Text style={styles.opinion}>Opinion.</Text>
            <Text style={styles.net}>net</Text>
            </View>
        </View>
        <View style={styles.modaldialog}>
            <View style={styles.overflowscroll}>
            <View style={styles.postexample}>
                <View style={styles.overlapgroup}>
                <Image style={styles.groupies} source="groupies.jpg"/>
                <View style={styles.flexcol}>
                <Text style={styles.mocktitle}>
                    This is a mock post title
                </Text>
                <View style={styles.flexrow}>
                    <Text style={styles.mockpost}>
                    This post can be 36 characters
                    </Text>
                    <View style={styles.voting}>
                    <Image style={styles.increment} source='increment.png'/>
                    <Text style={styles.votes}>0</Text>
                    <Image style={styles.decrement} source='decrement.jpg' />
                    </View>
                </View>
                </View>
            </View>
            </View>
        </View>
        </View>
        <View style={styles.bottomframe}>
        <View style={styles.framehomebox}>
            <Image style={styles.chat} source="person.jpg" />
            <View style={styles.background}></View>
            <Image style={styles.person} source="groupies.jpg"/>
            <Image style={styles.addPost} source="increment.png"/>
        </View>
        </View>
    </View>
    </View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        display: 'contents',
        textDecorationLine: 'none',
        textDecorationColor: '#000',
        textDecorationStyle: 'solid',
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        pointerEvents: 'none',
        width: '100%',
    },
    homescreen: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        height: 812,
        overflow: 'hidden',
        width: 367,
    },
    homepagedesign: {
        alignItems: 'flex-start',
        display: 'flex',
        gap: 56,
        height: 73,
        marginLeft: 23,
        marginTop: 27,
        minWidth: 213,
    },
    frame106: {
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        gap: 36,
        height: 25,
        minWidth: 34,
    },
    new: {
        alignItems: 'flex-start',
        backgroundColor: '#dff',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        display: 'flex',
        height: 26,
        marginBottom: -1.46,
        minWidth: 38,
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
    },
    popular: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 32,
        shadowColor: '#4660871a',
        shadowOpacity: 1,
        display: 'flex',
        height: 46,
        marginBottom: -1.46,
        overflow: 'hidden',
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
        width: 76,
    },
    positive: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 32,
        shadowColor: '#4660871a',
        shadowOpacity: 1,
        display: 'flex',
        height: 26,
        marginBottom: -1.46,
        overflow: 'hidden',
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
        width: 52,
    },
    negative: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 32,
        shadowColor: '#4660871a',
        shadowOpacity: 1,
        display: 'flex',
        height: 26,
        marginBottom: -1.46,
        overflow: 'hidden',
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8,
        width: 6,
    },
    title: {
        color: 'transparent',
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 'normal',
        minHeight: 34,
        textAlign: 'center',
        width: 12,
    },
    modeldialog: {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        borderColor: '#00f',
        borderRadius: 12,
        display: 'flex',
        height: 580,
        justifyContent: 'center',
        width: 347,
    },
    overflowscroll: {
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        height: 676,
        marginBottom: -96,
        overflow: 'scroll',
        paddingTop: 6,
        paddingRight: 10,
        paddingBottom: 6,
        paddingLeft: 10,
        width: 343,
    },
    postexample: {
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        marginLeft: 1,
        minWidth: 322,
        paddingTop: 0,
        paddingRight: 4,
        paddingBottom: 0,
        paddingLeft: 4,
    },
    overlapgroup: {
        alignItems: 'flex-start',
        backgroundColor: '#2f80ed1a',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderTopColor: '#0000001a',
        borderRightColor: '#0000001a',
        borderBottomColor: '#0000001a',
        borderLeftColor: '#0000001a',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        display: 'flex',
        gap: 12,
        height: 79,
        minWidth: 313,
        paddingTop: 3,
        paddingRight: 6,
        paddingBottom: 3,
        paddingLeft: 6,
    },
    groupies: {
        alignSelf: 'center',
        height: 30,
        marginBottom: 3,
        width: 30,
    },
    flexcol: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 65,
        width: 252,
    },
    mocktitle: {
        height: 24,
        letterSpacing: 0,
        width: 252,
    },
    flexrow: {
        alignItems: 'flex-start',
        display: 'flex',
        gap: 37,
        height: 41,
        minWidth: 158,
    },
    mockpost: {
        height: 40,
        letterSpacing: 0,
        width: 89,
    },
    voting: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        minWidth: 32,
    },
    increment: {
        height: 32,
        width: 32,
    },
    votes: {
        height: 23,
        letterSpacing: 0,
        marginBottom: 1,
        marginLeft: 8,
        textAlign: 'center',
        width: 18,
    },
    decrement: {
        height: 32,
        marginLeft: 9,
        width: 32,
    },
    bottomframe: {
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        minWidth: 100,
    },
    framehomebox: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        display: 'flex',
        height: 86,
        justifyContent: 'flex-end',
        minWidth: 325,
    },  
    chat: {
        height: 24,
        width: 24,
    },
    background: {
        backgroundColor: '#ddf',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28,
        height: 56,
        marginLeft: 53,
        width: 56,
    },
    person: {
        height: 24,
        marginLeft: 69,
        width: 24,
    },
    addPost: {
        alignSelf: 'flex-end',
        height: 24,
        marginBottom: -60,
        marginLeft: 94,
        width: 24,
    }
});
