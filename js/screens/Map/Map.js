import React from 'react';
import { Text, View} from 'react-native';
import { WebView } from "react-native";

const Map = () => {
    return (
        <WebView 
            source={{uri: 'https://www.google.ca/maps/place/RED+Academy/@49.2631722,-123.1392189,17z/data=!4m5!3m4!1s0x0:0x7edde857c28340ba!8m2!3d49.2633479!4d-123.1381278' }}
            style={{height: '100%', width: '100%'}}
        />
    )
}

export default Map;