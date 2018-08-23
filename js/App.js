import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStackNavigator from "./navigation/RootStackNavigation";
import { ApolloProvider } from 'react-apollo';
import client from './config/api';
import { FavesProvider } from './context/FavesContext'


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
