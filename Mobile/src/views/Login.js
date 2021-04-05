import React, {useState} from 'react'
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native'
import {TextInput, Button} from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
import MyInput from '../components/MyInput'

// Styles

import MainStyle from '../assets/css/mainStyle'
import LoginStyle from '../assets/css/loginStyle'

// Icons

import {Ic_Login, WaveLogin, 
    Ic_Padlock, Ic_Person} from '../assets/svg'

export default ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [hasError, setError] = useState(false)
    const [alertEmpty, setAlertEmpty] = useState(false)

    // Functions

    const clear = () => {
        this.usernameInput.clear()
        this.passwordInput.clear()
        setUsername(undefined)
        setPassword(undefined)
    }

    const verifyLogin = async () => {
        let req = await fetch('http://192.168.0.17:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        let res = await req.json()

        if(res === 'Not Found'){
            setError(true)
            setAlertEmpty(false)
            clear()
        } else {
            console.log('Can login')
        }

        console.log(res)
    }

    return(
        <SafeAreaView>
            <ScrollView style={MainStyle.container}>
                <StatusBar translucent backgroundColor='transparent'/>

                <View style={MainStyle.imageContainer}>
                    <Ic_Login width={230} height={230}/>
                </View>

                <WaveLogin style={LoginStyle.wave}/>

                <Text style={LoginStyle.title}>Welcome</Text>

                {/* Form */}

                <View style={MainStyle.inputContainer}>
                    <MyInput 
                        label='Username'
                        ic={<Ic_Person name={'null'} width={20}/>}
                        onChangeText={txt => setUsername(txt)}
                        inputRef={ref => this.usernameInput = ref}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        hasNext={true}/>
                    
                    <MyInput 
                        label='Password'
                        ic={<Ic_Padlock name={'camera'} width={20}/>}
                        onChangeText={txt => setPassword(txt)}
                        inputRef={ref => this.passwordInput = ref}
                        hasNext={false}/>

                    <Button
                        style={MainStyle.btn}
                        mode="contained"
                        onPress={() => {
                            if(username.length < 1 || password.length < 1) {
                                setError(true)
                                setAlertEmpty(true)
                                console.log('Preencha')
                            } else verifyLogin()
                        }}>
                        get in
                    </Button>

                    <Text style={LoginStyle.txtReg} onPress={() => navigation.navigate('Register')}>
                        Register
                    </Text>
                </View>

                <AwesomeAlert
                    show={hasError}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText='Ok'
                    message={alertEmpty ? 'Fill in all fields' : 'User not found'}
                    title='Error'
                    onConfirmPressed={() => setError(false)}
                    titleStyle={MainStyle.alertTitle(true)}
                    contentContainerStyle={MainStyle.alertContainer}
                    messageStyle={MainStyle.alertMessage}
                    confirmButtonStyle={MainStyle.alertConfirmBtn}
                    confirmButtonTextStyle={MainStyle.alertConfirmTxt}
                    overlayStyle={MainStyle.alertOverlay}/>

            </ScrollView>
        </SafeAreaView>
    )
}