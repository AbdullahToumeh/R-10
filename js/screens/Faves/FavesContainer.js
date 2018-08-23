import React, { Component } from 'react';
import FavesContext from '../../context/FavesContext/'
import Faves from './Faves'

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: 'Faves',
    headerTitleStyle: { color: 'white' }
  }
  render() {
    return (
    <FavesContext.Consumer >
      {values => {
        console.log(values)
        return <Faves /> 
      }}
    </FavesContext.Consumer>
    )
  }
}
