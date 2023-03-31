import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

import LoginScreen from '../Screens/Auth/login.screen';
import RegisterScreen from "../Screens/Auth/register.screen";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='RegisterScreen'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack