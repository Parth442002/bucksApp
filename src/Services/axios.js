import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useState } from 'react';


export async function getToken(token_name) {
  try {
      const token = await AsyncStorage.getItem(token_name)
      return token
  } catch (error) {
      console.log('Load token error: ', error);
  }
  return token
}


export default Api=axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
  timeout:5000,
  headers: {
    'Authorization': "Bearer ",
    'Content-Type': 'application/json',
    'accept': 'application/json',
}
});