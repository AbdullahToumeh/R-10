import { StyleSheet, Platform } from 'react-native';
import { font, colors } from './../../config/styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    location: {
        color: colors.mediumGrey,
        fontSize: 16,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
    },
    title: {
        fontSize: 25,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        marginLeft: 10,
        marginBottom: 10,
    },
    time:{
        marginLeft: 10,
        color: colors.red,
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        margin: 10,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        fontSize: 16,
        fontWeight: '300',
    },
    presented: {
        color: colors.mediumGrey,
        fontSize: 16,
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        margin: 10,
        fontWeight: 'bold',
    },
    presentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        height:70,
        width: 70,
        borderRadius: 35,
        margin: 10,
    },
    name: {
        ...Platform.select({
            android: {
                fontFamily: font.android,
            },
            ios: {
                fontFamily: font.ios
            }            
        }),
        fontSize: 16,
        fontWeight: 'bold'
    },
    button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        paddingRight:20,
        paddingLeft:20,

    }

})

export default styles
