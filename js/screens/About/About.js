import React from "react";
import { Text, View, ScrollView, Image } from "react-native";

const About = ({ aboutData }) => (
  <ScrollView>
    <View>
      <Image source={require("../../assets/r10_logo.png")} />
    </View>
    <View>
      <Text>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27 2018 in
        Vancouver, Bc.
      </Text>
    </View>
    <Text>Code of Conduct</Text>
    
      {aboutData.map(({title, description, id}) => (
        <View key={id}>
        <Text >{title} </Text>
        <Text >{description}</Text>
        </View>

      ))}
  </ScrollView>
);

export default About;
