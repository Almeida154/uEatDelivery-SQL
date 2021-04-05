import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen, LoginScreen, RegisterScreen} from './src/views'

const Stack = createStackNavigator();

export default () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}

        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}