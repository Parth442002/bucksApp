import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { Marker } from 'react-native-maps'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import constants from '../../Assets/constants'

const CustomMarker = ({
  latitude=12.834581114692774,
  longitude=80.04883748180059,title='Nikees',description='Sports Store'}) => {
    useEffect(() => {
      FontAwesome.loadFont();
      AntDesign.loadFont();
      Ionicons.loadFont();
    }, [])

  return (
    <Marker
      coordinate={{ latitude: latitude,
      longitude: longitude, }}
      title={title}
      description={description}
    >
      <View style={{padding:10,backgroundColor:constants.lightGreen,borderRadius:40}}>
        <Ionicons name="fast-food-outline" size={24} color="white" />
      </View>
    </Marker>
  )
}

export default CustomMarker