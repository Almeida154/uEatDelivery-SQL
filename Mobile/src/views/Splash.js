import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, Image, StatusBar, Button } from 'react-native'
import SplashStyle from '../assets/css/splashStyle'

export default ({navigation}) => {

    const interval = () => {
        setTimeout(() => navigation.navigate('Login'), 3000)
    }

    return(
        <View style={SplashStyle.ContainerMaster}>
            <StatusBar translucent backgroundColor="transparent"/>
            <Image style={SplashStyle.image} source={require('../assets/img/logo.png')}/>
            <Text style={SplashStyle.text}>uEat</Text>
            <Text style={SplashStyle.subText}>Delivery</Text>
            {interval()}
        </View>
    )
}