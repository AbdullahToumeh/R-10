import React from "react";
import { Text, View, SectionList, TouchableOpacity, ScrollView, Image, Button } from "react-native";
import moment from 'moment';
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";



const Session = ({ navigation, session, faveIds }) => {

    const sessionData = session.Session
    const FavesIdArr = []
    faveIds.favesIds.map(item => FavesIdArr.push(item.id))
    const favedSessions = FavesIdArr.includes(sessionData.id)

    return(
    <View>
        <ScrollView>
            <View>
                <Text>{sessionData.location}</Text>
                { !favedSessions ? ( <Text /> ) : <Icon name='md-heart' size={20} color='red' /> }
            </View>
            <Text>{sessionData.title}</Text>
            <Text>{moment(sessionData.starTime).format('h:mm a')}</Text>
            <Text>{sessionData.description}</Text>
            {!sessionData.speaker ? (<Text />) : (
            <View>
                <Text>Presented by:</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Speaker', {speakerId: sessionData.speaker.id})
                    }} 
                >
                    <View>
                        {!sessionData.speaker.image ? ( <Text />) : (
                        <Image 
                            source={{ uri: sessionData.speaker.image }}
                            style={{ height:100, width: 100 }}
                        />)}
                        <Text>{sessionData.speaker.name}</Text>
                    </View>

                </TouchableOpacity>
            </View>           
            )}

            {!favedSessions ? (
                <TouchableOpacity onPress= {() => {faveIds.addFave(sessionData.id)   }} >
                    <Text> Add to Favs </Text>
                </TouchableOpacity>
                
                ) : (
                <TouchableOpacity onPress={() => {faveIds.removeFave(sessionData.id) }} >
                    <Text> Remove from Favs </Text>
                </TouchableOpacity>
            )} 
        </ScrollView>
    </View> 
    )
   
};



export default Session;