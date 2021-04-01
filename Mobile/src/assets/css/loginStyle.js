import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFBF7',
    },

    text: {
        color: 'green',
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
    },

    imageContainer: {
        width: '100%',
        height: 340,
        backgroundColor: '#FFD18B',
        justifyContent: 'center',
        alignItems: 'center'
    },

    waveContainer: {
        width: '100%',
        height: 80,
    },

    title: {
        backgroundColor: '#6E310B',
        paddingHorizontal: 25,
        paddingTop: 16,
        paddingBottom: 14,
        borderRadius: 20,
        marginTop: -90,
        alignSelf: 'center',
        color: '#FFE6C1',
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        elevation: 10
    },

    inputContainer: {
        marginTop: 20,
        paddingHorizontal: 60,
        paddingVertical: 30
    },

    input: {
        backgroundColor: '#FFE6C1',
        marginVertical: 5,
        elevation: 2,
        fontFamily: 'Poppins-Bold',
        fontWeight: 'normal',
        fontStyle: 'normal'
    },

    btn: {
        backgroundColor: '#6E310B',
        marginVertical: 5,
        elevation: 2,
        paddingVertical: 10,
    },

    txtReg: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#FFC25B',
        textAlign: 'right',
        marginTop: 15
    }
})