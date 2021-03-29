import React from 'react'
import {View, Text, Image, StatusBar} from 'react-native'
import SplashStyle from './css/splash.js'

export default () => {
  return(
    <View style={SplashStyle.ContainerMaster}>
      <StatusBar translucent backgroundColor="transparent"/>
      <Image style={SplashStyle.image} source={require('./src/assets/img/logo.png')}/>
      <Text style={SplashStyle.text}>uEat</Text>
      <Text style={SplashStyle.subText}>Delivery</Text>
    </View>
  )
}