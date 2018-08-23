import React from "react";
import {createDrawerNavigator, createStackNavigator} from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import Faves from "../screens/Faves";
import Schedule from "../screens/Schedule";
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const renderIcon = (iconName, tintColor) => {
    return <Ionicons name={iconName} size={25} color={tintColor} />
}

aboutStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-information-circle', tintColor)
}
mapStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-map', tintColor)
}
scheduleStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-calendar', tintColor)
}
favesStack.navigationOptions = {
    drawerIcon: ({ tintColor }) => renderIcon('md-heart', tintColor)
}

export default createDrawerNavigator(
    {
    Schedule: scheduleStack,
    Map: mapStack,
    Faves: favesStack,
    About: aboutStack
    }

);
