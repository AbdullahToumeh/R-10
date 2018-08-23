import React from "react";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import Faves from "../screens/Faves";
import Schedule from "../screens/Schedule";
import Icon from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config'


const mapStack = createStackNavigator({
  Map: {
    screen: Map
  }
},
{
  navigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),

  })
});

const aboutStack = createStackNavigator({
  About: {
    screen: About
  }
},
{
  navigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation),
    title: 'About',
  })
});

const favesStack = createStackNavigator({
  Faves: {
    screen: Faves
  }
},
{
  navigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
});

const scheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
},
{
  navigationOptions: ({ navigation }) => ({
    ...sharedNavigationOptions(navigation)
  })
});

export default createBottomTabNavigator(
    {
    Schedule: scheduleStack,
    Map: mapStack,
    Faves: favesStack,
    About: aboutStack
    },
    {
      navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'About') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Map') {
              iconName = `ios-map`;
          } else if (routeName === 'Faves') {
            iconName = `ios-heart${focused ? '' : '-empty'}`;
          } else if (routeName === 'Schedule') {
            iconName = `ios-calendar`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),

        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "#999999",
          labelStyle: {
            fontFamily: "Montserrat",
            fontSize: 10
          },
          style: {
            backgroundColor: "black"
          }
        }
    }
);
