
import { StyleSheet, Platform } from 'react-native';
import { font, colors } from './../config/styles';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    symbol:{
        color: colors.purple,
        marginTop: 10,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    title:{
        color: colors.purple,
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),

    },
    text:{
        margin: 10,
        fontSize: 15,
        fontWeight: '100',
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),

    }
})

export default styles
