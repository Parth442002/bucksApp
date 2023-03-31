import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

const CustomMarker = ({
  latitude=12.834581114692774,
  longitude=80.04883748180059,title='Nikees',description='Sports Store'}) => {
  return (
    <Marker
    coordinate={{ latitude: latitude,
      longitude: longitude, }}
    title={title}
    description={description}

    />
  )
}

export default CustomMarker