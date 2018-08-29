import React, { Component } from 'react'
import Schedule from './Schedule'
import { Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import FavesContext from '../../context/FavesContext/'
import Loading from './../../components/Loading/Loading'

const scheduleData = gql`
    query {
      allSessions {
          description
          id
          location
          startTime
          title
          speaker {
            bio
            id
            image
            name
            url
          }        
        }
    }
`
export default class ScheduleContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: 'Schedule',
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
      <Query query = { scheduleData } >
      {({ loading, error, data }) => {
        if (loading) return <Loading/>;
        if (error) return <Text>Error </Text>;
        const newScheduleData = this.formatSessionData(data.allSessions)
        return (
            <FavesContext.Consumer>
              {values => { 
                const favesIdArr = []
                values.favesIds.map(item => favesIdArr.push(item.id))
                return (
                  <Schedule 
                    scheduleData={newScheduleData} 
                    navigation={this.props.navigation} 
                    favesIds={favesIdArr} 
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
