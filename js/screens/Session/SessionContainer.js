import React, { Component } from "react";
import { Text, View } from "react-native";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext/FavesContext";
import Loading from './../../components/Loading/Loading'


const sessionData = gql`
  query($id: ID) {
    Session(id: $id) {
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
`;

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTitleStyle: { color: "white" }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    sessionId = this.props.navigation.getParam("itemId");

    return (
      <Query query={sessionData} variables={{ id: sessionId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          if (error) return <Text>Error </Text>;

          return (
            <FavesContext.Consumer>
              {values => {
                return (
                  <Session
                    session={data.Session}
                    navigation={this.props.navigation}
                    sessionId={sessionId}
                    faveIds={values}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
