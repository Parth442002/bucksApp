
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useContext,useEffect,useState} from 'react'

//Local Imports
import SpashScreen from '../Screens/Splash.screen';
import AuthStack from "./AuthStack"
import MainTabs from "./MainTabs"
import MiscStack from './MiscStack';

const Stack = createNativeStackNavigator();

const ParentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="SpashScreen" component={SpashScreen}/>
      <Stack.Screen name="Auth" component={AuthStack}/>
      <Stack.Screen name="Main" component={MainTabs}/>
      <Stack.Screen name="Misc" component={MiscStack}/>
    </Stack.Navigator>
  )
}

export default ParentStack