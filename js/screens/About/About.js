import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import ConductItem from "../../components/ConductItem";
import  styles  from './styles';

const About = conducts => (

  <ScrollView>

    <View style={styles.header}>
      <Image source={require("../../assets/r10_logo.png")} style={styles.image}
      />
    </View>

    <View>

      <Text style={styles.text} >
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title} >Date & Venue</Text>
      <Text style={styles.text} >
        The R10 conference will take place on Tuesday, June 27 2018 in
        Vancouver, Bc.
      </Text>

    </View>

    <Text style={styles.title} > Code of Conduct </Text>

    {conducts.conducts.map(conduct => (<ConductItem conduct={conduct} key={conduct.id} /> ))}

    <View style={styles.footercontainer} >
      <Text style={styles.footerText} > © RED Academy 2018 </Text>
    </View>

  </ScrollView>
);

export default About;
