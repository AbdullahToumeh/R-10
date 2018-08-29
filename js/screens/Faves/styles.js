import { StyleSheet, Platform } from 'react-native';
import { font, colors } from './../../config/styles';

const styles = StyleSheet.create({
    time:{
        backgroundColor: colors.mediumGrey,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        padding: 10,
        marginBottom: 5,
        fontSize:16,
    },
    title:{
        fontSize: 18,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        padding: 10,
    },
    location:{
        paddingLeft: 10,
        fontSize: 14,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        color: colors.mediumGrey
    },
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    icon:{
        paddingRight: 10
    }
})

export default styles
