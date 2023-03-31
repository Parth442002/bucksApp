
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useContext,useEffect,useState} from 'react'
import BankDetailScreen from '../Screens/Misc/BankDetail.screen';
import RewardsValueScreen from '../Screens/Misc/RewardsValue.screen';


const Stack = createNativeStackNavigator();
const MiscStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='RewardsValueScreen'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen
        name="BankDetailScreen"
        component={BankDetailScreen}
      />
       <Stack.Screen
        name="RewardsValueScreen"
        component={RewardsValueScreen}
      />
    </Stack.Navigator>
  )
}

export default MiscStack