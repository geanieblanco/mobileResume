import { View } from 'react-native';
import React from 'react';

export default class Logo extends React.Component {
    render() {
        return(
            <View
            style={{
                height: 210,
                width: 210,
                backgroundColor: '#89FF77',
                shadowColor: '#5DEAE5',
                shadowOffset: {width: 15, height: 15},
                shadowOpacity: 1.0
            }}/>
        )
    }
}