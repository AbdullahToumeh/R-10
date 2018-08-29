import React, { Component } from 'react';
import FavesContext from '../../context/FavesContext/'
import Faves from './Faves'
import { Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './../../components/Loading/Loading'


const favesData = gql`
    query {
      allSessions {
          description
          id
          location
          startTime
          title      
        }
    }
`
export default class FavesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Faves',
    headerTitleStyle: { color: 'white' }
  }

  formatSessionData = sessions => {
    return sessions
      .reduce((acc, curr) => {
        const timeExists = acc.find(section => section.title === curr.startTime);
        timeExists
          ? timeExists.data.push(curr)
          : acc.push({ title: curr.startTime, data: [curr] });
        return acc;
      }, [])
      .sort((a, b) => a.title - b.title);
  };

  render() {

    return (
      <Query query={favesData} >
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error </Text>;
          return (
            <FavesContext.Consumer >
              {values => {
                const faveIdArr= [];
                values.favesIds.map(item => faveIdArr.push(item.id))
                const favedSessions = data.allSessions.filter(session => faveIdArr.includes(session.id))
                let favedSessionsFormatted = this.formatSessionData(favedSessions)
                return (
                  <Faves 
                    navigation={this.props.navigation}
                    faveIds={faveIdArr}
                    sessions={favedSessionsFormatted}
                  />
                )
              }}            
          </FavesContext.Consumer>
          )
        }}
      </Query>
    )
  }
}
