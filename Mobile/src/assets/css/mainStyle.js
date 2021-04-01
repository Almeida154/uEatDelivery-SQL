import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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