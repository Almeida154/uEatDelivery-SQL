import React from 'react'
import {TextInput} from 'react-native-paper'
import MainStyle from '../assets/css/mainStyle'

export default (props) => {
    return(
        <TextInput
        style={MainStyle.input('#FFE6C1')}
        label={props.label}
        ref={props.inputRef}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={props.onChangeText}
        theme={{colors: {text: "#D66823", primary: "#9A4916", placeholder: "#9A4916"}}}
        returnKeyType={props.hasNext ? 'next' : 'done'}
        blurOnSubmit={props.hasNext ? false : true}
        autoCorrect={false}
        left={<TextInput.Icon name={() => props.ic}/>}/>
    )
}