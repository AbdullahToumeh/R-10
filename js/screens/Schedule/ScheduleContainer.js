import React, { Component } from 'react';
import Schedule from './Schedule'

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
    headerTitleStyle: { color: 'white' }
  }
  render() {
    return <Schedule />;
  }
}
