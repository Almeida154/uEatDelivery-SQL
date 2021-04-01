import React, {useState} from 'react'
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native'
import {TextInput, Button} from 'react-native-paper';

import LoginStyle from '../assets/css/loginStyle'
import Icon from '../assets/svg/ic_login.svg'
import Wave from '../assets/svg/waveLogin.svg'

import Ic_Person from '../assets/svg/ic_user.svg'
import Ic_Padlock from '../assets/svg/ic_padlock.svg'

export default () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <SafeAreaView>
            <ScrollView style={LoginStyle.container}>
                <StatusBar backgroundColor='#FFD18B'/>

                {/* Icon */}
                <View style={LoginStyle.imageContainer}><Icon width={230} height={230}/></View>
                
                {/* Wave */}
                <View style={LoginStyle.waveContainer}><Wave width={720} height={80}/></View>
                
                {/* Welcome Text */}
                <Text style={LoginStyle.title}>Bem-Vindo</Text>

                {/* Form Container */}
                <View style={LoginStyle.inputContainer}>
                    <TextInput
                        style={LoginStyle.input} 
                        label='Username'
                        underlineColor='#ffe6c1'
                        theme={{colors: {text: "#D66823", primary: "#9A4916", placeholder: "#9A4916"}}}
                        fontFamily={"Poppins-Black"}
                        returnKeyType='next'
                        blurOnSubmit={false}
                        autoCorrect={false}
                        onSubmitEditing={() => {passwordInput.focus()}}
                        onChangeText={txt => setUsername(txt)}
                        left={<TextInput.Icon name={() => <Ic_Person name={'camera'} width={20}/>} />}/>
                    <TextInput
                        style={LoginStyle.input} 
                        label='Password'
                        underlineColor='#ffe6c1'
                        theme={{colors: {text: "#D66823", primary: "#9A4916", placeholder: "#9A4916"}}}
                        ref={input => {this.passwordInput = input}}
                        blurOnSubmit={true}
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={txt => setPassword(txt)}
                        left={<TextInput.Icon name={() => <Ic_Padlock name={'camera'} width={20} />} />}/>
                    <Button
                        style={LoginStyle.btn}
                        mode="contained"
                        onPress={() => {
                            if(username.length < 1 || password < 1) console.log('Preencha')
                            else console.log(username, password)
                        }}>
                        get in
                    </Button>
                    <Text style={LoginStyle.txtReg}>Register</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}