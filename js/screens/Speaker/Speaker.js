import React from "react";
import { Text, View, SectionList, TouchableOpacity, ScrollView, Image, Button, Linking } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Speaker = ({ navigation, speaker }) => {
  const speakerData = speaker.Speaker
  return (
    <View>
      <View style={{marginTop: 40}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons 
            name='ios-close'
            size={30}            
          />
        </TouchableOpacity>
        <Text>About the Speaker</Text>
      </View>
      <ScrollView>
        <View>
          <Image 
            source={{uri: speakerData.image}}
            style={{height:100, width: 100}}
          />
          <Text> {speakerData.name} </Text>
          <Text> {speakerData.bio} </Text>
          <TouchableOpacity 
            onPress={() => 
              {Linking.openURL(`https://en.wikipedia.org/wiki/${speakerData.name}`)}}
          >
            <Text >Read More on Wikipedia</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;