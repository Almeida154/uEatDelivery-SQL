import React, {useState} from 'react'
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native'
import {Button} from 'react-native-paper'
import AwesomeAlert from 'react-native-awesome-alerts';
import MyInput from '../components/MyInput'

// Styles

import MainStyle from '../assets/css/mainStyle'
import RegisterStyle from '../assets/css/registerStyle'

// Icons

import {WaveRegister, Ic_Person, 
    Ic_Padlock, Ic_Cpf, Ic_Phone, Ic_Email} from '../assets/svg'

export default ({navigation}) => {

    // Properties

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')

    const [hasError, setError] = useState(false)
    const [alertEmpty, setAlertEmpty] = useState(false)

    // Functions

    const register = async () => {
        const fields = [name, username, password, email, phone, cpf]
        for(field of fields) if(field.length < 1){
            setError(true)
            setAlertEmpty(true)
            return
        }

        let req = await fetch('http://192.168.0.17:3000/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                email: email,
                phone: phone,
                cpf: cpf
            })
        })

        let res = await req.json()
        
        if(res === 'Already Registered'){
            setError(true)
            setAlertEmpty(false)
            console.log('already registered men !!!!')
        } else {
            console.log('ok men')
        }
    }

    return(
        <SafeAreaView>
            <ScrollView style={MainStyle.container}>
                <StatusBar translucent backgroundColor='transparent'/>
                
                <View style={RegisterStyle.area}>
                    <Text style={RegisterStyle.title}>Register</Text>
                </View>

                <WaveRegister style={RegisterStyle.wave}/>

                {/* Form */}

                <View style={[RegisterStyle.form, {padding: 20}]}>
                    
                    <MyInput 
                        label='Full Name'
                        ic={<Ic_Person name={'null'} width={20}/>}
                        onChangeText={txt => setName(txt)}
                        inputRef={ref => this.fullNameRef = ref}
                        onSubmitEditing={() => this.usernameRef.focus()}
                        hasNext={true}/>

                    <MyInput 
                        label='Username'
                        ic={<Ic_Person name={'null'} width={20}/>}
                        onChangeText={txt => setUsername(txt)}
                        inputRef={ref => this.usernameRef = ref}
                        onSubmitEditing={() => this.emailRef.focus()}
                        hasNext={true}/>

                    <MyInput 
                        label='Email'
                        ic={<Ic_Email name={'null'} width={22} marginTop={3}/>}
                        onChangeText={txt => setEmail(txt)}
                        inputRef={ref => this.emailRef = ref}
                        onSubmitEditing={() => this.phoneRef.focus()}
                        hasNext={true}/>

                    <MyInput 
                        label='Phone'
                        ic={<Ic_Phone name={'null'} width={22}/>}
                        onChangeText={txt => setPhone(txt)}
                        inputRef={ref => this.phoneRef = ref}
                        onSubmitEditing={() => this.cpfRef.focus()}
                        hasNext={true}/>

                    <MyInput 
                        label='Cpf'
                        ic={<Ic_Cpf name={'null'} width={22} marginTop={6}/>}
                        onChangeText={txt => setCpf(txt)}
                        inputRef={ref => this.cpfRef = ref}
                        onSubmitEditing={() => this.passwordRef.focus()}
                        hasNext={true}/>

                    <MyInput 
                        label='Password'
                        ic={<Ic_Padlock name={'null'} width={20}/>}
                        onChangeText={txt => setPassword(txt)}
                        inputRef={ref => this.passwordRef = ref}
                        hasNext={false}/>

                    <Button
                        style={MainStyle.btn}
                        mode="contained"
                        onPress={() => register()}>
                        get in
                    </Button>
              
                </View>

                <Text style={[MainStyle.back, {marginTop: 60,}]} 
                    onPress={() => navigation.navigate('Login')}>
                    Back
                </Text>

                <AwesomeAlert
                    show={hasError}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText='Ok'
                    message={alertEmpty ? 'Fill in all fields' : 'Some fields are already registered!'}
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