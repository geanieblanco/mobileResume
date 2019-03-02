import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Image 
                    resizeMode="contain"
                    source={require('../assets/images/logo.png')}
                    style={styles.image}/>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: 50,
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        height: 100,
        width: 100,
    },
    title: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 40,
        fontFamily: "KemcoPixelBold",
    }
})