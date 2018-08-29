import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, Easing, LayoutAnimation } from 'react-native';
import styles from './styles';
import PropTypes from "prop-types";

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
            <View  >
                <TouchableOpacity onPress={this.onPress} >
                    <View style={styles.container} >
                        <Animated.Text style={styles.symbol} >{this.state.isVisible ? '-' : '+'}</Animated.Text>
                        <Text style={styles.title} > {this.props.conduct.title} </Text>
                    </View>
                </TouchableOpacity>

                {this.state.isVisible && <Text style={styles.text} > {this.props.conduct.description} </Text> }
            </View>
        )
    }
}

ConductItem.propTypes = {
    conduct: PropTypes.shape({
        id:PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
}

export default ConductItem;
