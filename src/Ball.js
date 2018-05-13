import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

class Ball extends React.Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 200, y: 505 }
        }).start();
    }    

    render() {
        console.log('this.position.getLayout()', Object.keys(this.position))
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
                <Text>Czacza</Text>
            </Animated.View>    
        )
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
}

export default Ball;