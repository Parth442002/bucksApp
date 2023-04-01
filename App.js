import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React, { useEffect, useState,useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { MyProvider } from './src/context/userContext'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

//Parent Stack
import ParentStack from "./src/Navigation/ParentStack";

const queryClient = new QueryClient()
const App = () => {
  return (
      <MyProvider>
        <NavigationContainer>
          <ParentStack/>
        </NavigationContainer>
      </MyProvider>
  )
}

export default App

