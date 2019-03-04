import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Button from '../components/button';

export default class Landing extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/logo.png')} />
                <Text style={styles.text}>WELCOME</Text>
                <Button 
                    text="ABOUT"
                    style={[styles.button, 
                    {backgroundColor: '#5DEAE5'}]}/>
                <Button 
                    text="RESUME"
                    style={[styles.button, 
                    {backgroundColor: '#FFEF60'}]}/>
                <Button 
                    text="CONTACT"
                    style={[styles.button, 
                    {backgroundColor: '#FF6BEB'}]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height:210, 
        width:210,
    },
    text: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 50,
        fontFamily: "KemcoPixelBold"
    }
})