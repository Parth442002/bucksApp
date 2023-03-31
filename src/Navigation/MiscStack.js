
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useContext,useEffect,useState} from 'react'
import BankDetailScreen from '../Screens/Misc/BankDetail.screen';


const Stack = createNativeStackNavigator();
const MiscStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='BankDetailsScreen'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen
        name="BankDetailScreen"
        component={BankDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default MiscStack