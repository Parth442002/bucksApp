import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React, { useEffect, useState,useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Context Imports
import { UserDataContext,UserDataContextProvider} from './src/context/userDataContext'

//Parent Stack
import ParentStack from "./src/Navigation/ParentStack";

const App = () => {
  const [location,setLocation]=useState(false)
  const { user, updateUser } = useContext(UserDataContext);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <UserDataContextProvider>
      <NavigationContainer>
        <ParentStack/>
      </NavigationContainer>
    </UserDataContextProvider>
  )
}

export default App