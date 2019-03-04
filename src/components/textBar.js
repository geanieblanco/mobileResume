import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class TextBar extends React.Component {
    render() {
        return(
            <View
                style={[styles.bar || this.props.style]} >
                <Text style={styles.headline}>{this.props.headline}</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    bar: {
        height: 30,
        width: 220,
        marginBottom: 10,
        justifyContent: 'center',
    },
    headline: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: "KemcoPixelBold"
    }
})