import React, { Component } from 'react';
import styles from './styles';
import {Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';

class AnimatedList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            opened: false
        };
        
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        }

        this.showInfo = this.showInfo.bind(this)
    }

    componentWillUpdate() {
        const config = {
            duration: 750,
            update: {
                type: 'linear'
            }
        }

        LayoutAnimation.configureNext(config)
    }

    showInfo() {
        this.setState({
            opened: !this.state.opened
        })
    }

    render () {
        
    }




}


export default AnimatedList