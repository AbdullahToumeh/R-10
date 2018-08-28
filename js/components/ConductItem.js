import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing, LayoutAnimation } from 'react-native';
import styles from './styles';

class ConductItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            rotateValue: new Animated.Value(0)
        }
    }


    onPress = () => {

        this.state.rotateValue.setValue(0)
        Animated.timing(
          this.state.rotateValue,
          { toValue: 1 }
        ).start()
        LayoutAnimation.linear();
        this.setState({ isVisible: !this.state.isVisible });
    
      }
    
    
    render () {

        let spin = this.state.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
      
          let animationStyles = {
            transform: [
              { rotate: spin },
            ]
          }

        return (
            <View >
                <TouchableOpacity onPress={this.onPress} >

                    <Animated.Text >{this.state.isVisible ? '-' : '+'}</Animated.Text>
                    <Text> {`${this.props.conduct.title}`} </Text>
                </TouchableOpacity>

                {this.state.isVisible &&
                    <Text >{this.props.conduct.description}</Text>
                }
            </View>
        )
    }
}

export default ConductItem;
