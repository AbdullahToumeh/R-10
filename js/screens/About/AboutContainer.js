import React, { Component } from 'react';
import About from './About';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text} from 'react-native';

const AboutData = gql`
    query {
        allConducts {
            title
            description
            id
        }
    }
`
export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'About',
    headerTitleStyle: { color: 'white' }
  }

  render() {
    return (
      <Query query = { AboutData } >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error </Text>;
          return <About aboutData={data.allConducts} />
        }}
        </Query>
    )
  }
}
