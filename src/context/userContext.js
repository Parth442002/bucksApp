import React, { createContext, useState,useEffect } from 'react';
import * as Location from 'expo-location';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState({
    id:"",
    primary_identifier:"",
    location:{},
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission not granted');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const locat={
        latitude:location.coords.latitude,
        longitude:location.coords.longitude}

      setMyState({...myState,location:locat});
    })();
  }, [])

  const value = {
    myState,
    setMyState
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };