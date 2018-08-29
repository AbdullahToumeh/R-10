import React from "react";
import { Text, View, ScrollView, SectionList, TouchableOpacity } from "react-native";
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import PropTypes from "prop-types";


const Faves = ({ sessions, navigation, faveIds}) => {
  return (
    <ScrollView>
      <SectionList
        sections={sessions}
        keyExtractor={item => item.id}
        renderSectionHeader={({section: {title}}) => (
          <View>
            <Text style={styles.time}>
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
              <Text style={styles.title}>{item.title}</Text>
            </View>          
          </TouchableOpacity>
  
          <View style={styles.container}>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.icon}>
              { !faveIds.includes( item.id ) ? ( <Text /> ) : <Icon name='md-heart' size={20} color='#cf392a' /> }
            </Text>
          </View>
        </View>
      )
    }


      />
    </ScrollView>
  );
};

Faves.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
}

export default Faves;