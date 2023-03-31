
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useContext,useEffect,useState} from 'react'
import { Location } from 'expo-location';

//Context
import {MyContext} from "../context/userContext";

//Local Imports
import SpashScreen from '../Screens/Splash.screen';
import AuthStack from "./AuthStack"
import MainTabs from "./MainTabs"
import MiscStack from './MiscStack';

const Stack = createNativeStackNavigator();
const ParentStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Misc'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="SpashScreen" component={SpashScreen}/>
      <Stack.Screen name="Auth" component={AuthStack}/>
      <Stack.Screen name="main" component={MainTabs}/>
      <Stack.Screen name="Misc" component={MiscStack}/>
    </Stack.Navigator>
  )
}

export default ParentStack