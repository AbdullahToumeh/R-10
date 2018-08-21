import React from 'react';
import { Text, View, ScrollView, Image} from 'react-native';

const About = () => {
    return (
        <ScrollView >
            <View>
                <Image source={require('../../assets/r10_logo.png')} />
                <Text> ABOUT PAGE</Text>
            </View>
        </ScrollView>
    )
}

export default About;