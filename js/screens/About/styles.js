import { StyleSheet, Platform } from 'react-native';
import { font, colors } from './../../config/styles';

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
        margin: 10
    },
    image: {
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        fontWeight: '100',
        margin: 10,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }
        })
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        })
    },
    footercontainer: {
        borderTopWidth: 1,
        borderTopColor: colors.mediumGrey,
        margin: 10,
    },
    footerText: {
        marginTop: 20,
        marginBottom: 20,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        })
    }

})

export default styles

