import React from "react";
import { Text, View, SectionList, TouchableOpacity, ScrollView } from "react-native";
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";



const Schedule = ({ scheduleData, navigation, favesIds }) => (
  <SectionList
    sections={scheduleData}
    renderItem={({ item, index, section }) => (
      <View>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Session', {itemId:item.id})}
        >
          <View>
            <Text>{item.title}</Text>
          </View>          
        </TouchableOpacity>

        <View>
          <Text>{item.location}</Text>
          <Text>
            { !favesIds.includes( item.id ) ? ( <Text /> ) : <Icon name='md-heart' size={20} color='red' /> }
          </Text>
        </View>
      </View>
    )
  }
  renderSectionHeader={({section: {title}}) => (
    <View>
      <Text>
        {moment(title).format('h:mm a')}
      </Text>
    </View>
  )}
  keyExtractor={item => item.id}

  />

);

export default Schedule;