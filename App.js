import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React, { useEffect, useState,useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

//Parent Stack
import ParentStack from "./src/Navigation/ParentStack";

const App = () => {
  return (
      <NavigationContainer>
        <ParentStack/>
      </NavigationContainer>
  )
}

export default App