import React from "react";
import { Text, View, SectionList, TouchableOpacity, ScrollView, Image, Button } from "react-native";
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from "prop-types";

const Session = ({ navigation, session, faveIds }) => {

    const sessionData = session
    const FavesIdArr = []
    faveIds.favesIds.map(item => FavesIdArr.push(item.id))
    const favedSessions = FavesIdArr.includes(sessionData.id)

    return(
    <View>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.location} > {sessionData.location} </Text>
                { !favedSessions ? ( <Text /> ) : <Icon name='md-heart' size={20} color='#cf392a' /> }
            </View>
            <Text style={styles.title} >{sessionData.title}</Text>
            <Text style={styles.time} >{moment(sessionData.starTime).format('h:mm a')}</Text>
            <Text style={styles.description} >{sessionData.description}</Text>
            {!sessionData.speaker ? (<Text />) : (
            <View>
                <Text style={styles.presented}> Presented by: </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Speaker', {speakerId: sessionData.speaker.id})
                    }} 
                >
                    <View style={styles.presentContainer} >
                        {!sessionData.speaker.image ? ( <Text />) : (
                        <Image 
                            source={{ uri: sessionData.speaker.image }}
                            style={styles.image}
                        />)}
                        <Text style={styles.name} >{sessionData.speaker.name}</Text>
                    </View>

                </TouchableOpacity>
            </View>           
            )}
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
                {!favedSessions ? (
                    <TouchableOpacity onPress= {() => {faveIds.addFave(sessionData.id) }} style={styles.button} >
                        <Text style={styles.buttonText} > Add to Favs </Text>
                    </TouchableOpacity>
                    
                    ) : (
                    <TouchableOpacity onPress={() => {faveIds.removeFave(sessionData.id) }} style={styles.button} >
                        <Text style={styles.buttonText} > Remove from Favs </Text>
                    </TouchableOpacity>
                )} 
            </LinearGradient>
        </ScrollView>
    </View> 
    )
   
};

Session.propTypes= {
    session: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        speaker: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    }).isRequired,
    navigation: PropTypes.object.isRequired,
    faveIds: PropTypes.object.isRequired
}

export default Session;