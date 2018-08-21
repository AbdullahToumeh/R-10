import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import About from "../screens/About";
import Map from "../screens/Map";
import Favs from "../screens/Favs";
import Schedule from "../screens/Schedule";

const map = createStackNavigator({
  Map: {
    screen: Map
  }
});

const about = createStackNavigator({
  About: {
    screen: About
  }
});

const favs = createStackNavigator({
  Favs: {
    screen: Favs
  }
});

const schedule = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});
export default createBottomTabNavigator({
  About: about,
  Map: map,
  Favs: favs,
  Schedule: schedule
});