import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Easing,
  LayoutAnimation,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  // this code is inspiring from this tutorial https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/
  
  toggle() {
    let start = this.state.expanded ? this.state.maxHeight : 0,
      end = this.state.expanded ? 0 : this.state.maxHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(start);
    Animated.timing(this.state.animation, { toValue: end }).start();
  }

  _setMaxHeight(event) {
    if (
      this.state.maxHeight === undefined ||
      event.nativeEvent.layout.height > this.state.maxHeight
    ) {
      this.setState({
        maxHeight: event.nativeEvent.layout.height
      });
    }
    if (!this.state.animation)
      this.setState({ animation: new Animated.Value(0) });
  }


  render() {
    return (
      <View >
            <TouchableOpacity onPress={this.toggle.bind(this)} >
              <View style={styles.container}>
                <Animated.Text style={[styles.symbol]}>
                  {this.state.expanded ? "-" : "+"}
                </Animated.Text>
                <Text style={styles.title}> {this.props.conduct.title} </Text>
              </View>
            </TouchableOpacity>
        <Animated.View
          style={{ height: this.state.animation }}
        >
          <View style={styles.text} onLayout={this._setMaxHeight.bind(this)}>
            <Text> {this.props.conduct.description} </Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

ConductItem.propTypes = {
  conduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ConductItem;
