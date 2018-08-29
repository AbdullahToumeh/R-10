import React from "react";
import { Text, View, SectionList, TouchableOpacity, ScrollView, Image, Button, Linking } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";

const Speaker = ({ navigation, speaker }) => {
  const speakerData = speaker
  return (
    <View style={styles.container} >
      <View style={styles.header}>
          <Ionicons onPress={() => navigation.goBack()}
            style={styles.xsymbol}
            name='ios-close'
            size={30}            
          />
        <Text style={styles.aboutTheSpeaker}>About the Speaker</Text>
      </View>
      <ScrollView>
        <View style={styles.speaker} >
          <Image 
            source={{uri: speakerData.image}}
            style={styles.image}
          />
          <Text style={styles.name} > {speakerData.name} </Text>
          <Text style={styles.bio}> {speakerData.bio} </Text>
          <LinearGradient
                colors={['#9963ea', '#8797D6']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={{
                    height: 50,
                    width: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 50,
                    marginTop: 25
                }}
            >
            <TouchableOpacity 
              onPress={() => 
                {Linking.openURL(`https://en.wikipedia.org/wiki/${speakerData.name}`)}}
              style={styles.button}
            >
              <Text style={styles.buttonText} >Read More on Wikipedia</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.object.isRequired
}

export default Speaker;