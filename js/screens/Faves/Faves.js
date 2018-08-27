import React from "react";
import { Text, View, ScrollView, SectionList, TouchableOpacity } from "react-native";
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";

const Faves = ({ sessions, navigation, faveIds}) => {
  return (
    <ScrollView>
      <SectionList
        sections={sessions}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text>
              {moment(title).format('h:mm a')}
            </Text>
          </View>
        )}
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
              { !faveIds.includes( item.id ) ? ( <Text /> ) : <Icon name='md-heart' size={20} color='red' /> }
            </Text>
          </View>
        </View>
      )
    }


      />
    </ScrollView>
  );
};

export default Faves;