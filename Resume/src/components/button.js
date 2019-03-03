import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Button extends React.Component {
    render() {
        return (
        <TouchableOpacity
            style={[styles.button, this.props.style]} 
            onPress={this.props.onPress}>
            <Text
                style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 220,
        marginBottom: 10,
        borderRadius: 8,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: "KemcoPixelBold"
    }
})
