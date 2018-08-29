
import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import styles from "./styles";

const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='black' />
        <Text style={styles.text}> Loading</Text>
    </View>
)

export default Loading