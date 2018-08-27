import React, { Component } from 'react';
import Speaker from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, View } from "react-native";



const speakerData = gql`
query($id: ID) {
  Speaker(id: $id) {
      bio
      id
      image
      name
      url
  }        
}`

export default class SpeakerContainer extends Component {  

  render() {
    speakerId = this.props.navigation.getParam('speakerId')

    return (
      <Query query = {speakerData} variables={{id: speakerId}} >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error </Text>;
          return <Speaker navigation={this.props.navigation} speaker={data} />
        }}
      </Query>

    )
  }
}
