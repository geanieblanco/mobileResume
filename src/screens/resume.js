import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';
import Header from '../components/header';
import TextBar from '../components/textBar';

export default class About extends React.Component {
    render() {
        return(
            <ScrollView style={styles.container}>
                <Header title="Resume"/>

            <View style={{}}>
                <TextBar
                    style={[{backgroundColor: "#5DEAE5"}]}
                    headline="Background"/>
                
                <Text style={styles.text}>
                Asking yourself “what do you want to be when you grow up?” is much less whimsical when you’re actually grown up. Coming from a background in event management and marketing, I transitioned to tech in 2017. After graduating from Rutgers’ Coding Bootcamp with a certification in full stack development, I began on the path of building and starting my own mobile startup, Streetscape.</Text>

                <TextBar
                    style={[{backgroundColor: "#89FF77"}]}
                    headline="Goals"/>

                <Text style={styles.text}>
                One day I hope to make a difference as a product manager and designer. The combination of critical and creative problem solving is a perfect amalgam of my strongest skills. My #1 pipe dream is to manage at, or own a mobile development agency while continuing to learn new technologies and bring accessible tech to as many people as possible.</Text>
                
                <TextBar
                    style={[{backgroundColor: "#5DEAE5"}]}
                    headline="Streetscape"/>

                <Text style={styles.text}>Hi! I'm Geanie, nice to make your e-quaintance! I'm a junior frontend engineer with a strong interest in accessible UX design, and mobile development.</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        height: 100,
        flex: 1
    },
    image: {
        height: 60,
        width: 60
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: "KemcoPixelBold"
    },
    text: {
        fontFamily: "BitstreamVeraSansMono-Roman",
        fontSize: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    image: {
        height:210, 
        width:210,
        marginBottom: 40,
        marginTop: 50
    },
})