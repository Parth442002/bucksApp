import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const ExploreScreen = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <MapView
        style={{width: '100%',
        height: '100%',}}
      />
    </View>
  )
}

export default ExploreScreen