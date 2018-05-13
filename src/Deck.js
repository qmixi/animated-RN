import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

const SCREEM_WIDTH = Dimensions.get('window').width;

class Deck extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: () => { }
        });

        this.state = { panResponder, position };
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEM_WIDTH * 1.5, 0, SCREEM_WIDTH * 1.5],
            outputRange: ['-100deg', '0deg', '100deg']
        });

        return {
            ...position.getLayout(),
            transform: [{ rotate }]
        }
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                        key={item.id}
                        style={this.getCardStyle()}
                        {...this.state.panResponder.panHandlers}>
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }

            return this.props.renderCard(item);
        });
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

export default Deck;