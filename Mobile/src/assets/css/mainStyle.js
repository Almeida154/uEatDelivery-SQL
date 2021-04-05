import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    // Generic

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFBF7',
    },

    imageContainer: {
        width: '100%',
        height: 340,
        backgroundColor: '#FFD18B',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtBack: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#FFC25B',
        textAlign: 'right',
        marginTop: 15
    },

    back: {
        alignSelf: 'center',
        fontFamily: 'Poppins-Italic',
        fontSize: 20,
        color: '#6E310B'
    },

    // Form

    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 60,
        paddingVertical: 30
    },

    input: color => ({
        backgroundColor: color,
        marginVertical: 5,
        elevation: 2,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'normal',
        fontStyle: 'normal'
    }),

    btn: {
        backgroundColor: '#6E310B',
        marginVertical: 5,
        elevation: 2,
        paddingVertical: 10,
    },

    // Alert

    alertContainer: {
        backgroundColor: '#1b0c02',
        padding: 10,
        borderRadius: 10,
        width: 240,
    },

    alertTitle: (isError) => ({
        color: isError ? '#D66823' : '#CCFCCB',
        fontSize: 22,
        fontFamily: 'Poppins-Black'
    }),

    alertMessage: {
        color: '#f9f9f9',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },

    alertConfirmBtn: {
        width: 60,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#6E310B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },

    alertConfirmTxt: {
        color: '#D66823',
        fontFamily: 'Poppins-Black'
    },

    alertOverlay: {
        backgroundColor: '#000',
        opacity: .7
    }
})