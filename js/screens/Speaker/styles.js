import { StyleSheet, Platform } from 'react-native';
import { font, colors } from './../../config/styles';

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        height: '100%',
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
    },
    speaker: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 15,
        borderRadius: 10
    },
    aboutTheSpeaker:{
        color: 'white',
        fontSize: 20,
    },
    xsymbol:{
        color: 'white',
        alignSelf: 'flex-end',
        flex: 0.5,
        marginLeft: 10,
        paddingTop: 5
    },
    image:{
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    name:{
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
        }),
    },
    bio:{
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '100',
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
    },
    button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        paddingRight:20,
        paddingLeft:20,

    }
})

export default styles
