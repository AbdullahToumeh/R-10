import React, { Component } from 'react';
import About from './About';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text} from 'react-native';
import Loading from './../../components/Loading/Loading'

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
        {({ loading, error, data: {allConducts} }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error </Text>;
          return <About conducts={allConducts} />
        }}
        </Query>
    )
  }
}
