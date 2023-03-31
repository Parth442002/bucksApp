import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React,{useContext} from 'react'
import MapView,{Marker} from 'react-native-maps';

import { MyContext } from '../../context/userContext';
import CustomMarker from '../../Components/Explore/CustomMarker';
import SearchInputField from '../../Components/Home/SearchInputField';
import HomeCarousel from '../../data/HomeCarousel';


const ExploreScreen = () => {
  const { myState, setMyState } = useContext(MyContext);
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <MapView
        style={{width: '100%',
        height: '100%',}}
        initialRegion={{
          latitude: 12.834581114692774,
          longitude: 80.04883748180059,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <CustomMarker/>
        <CustomMarker/>
        <CustomMarker/>
      </MapView>
      <View style={styles.searchContainer}>
        <SearchInputField/>
      </View>
      <View style={styles.searchPartnerCarousel}>
        <HomeCarousel/>
      </View>
    </View>
  )
}

export default ExploreScreen


const styles=StyleSheet.create({
  searchContainer:{
    position:"absolute",
    top:40,
  },
  searchPartnerCarousel:{
    position:"absolute",
    bottom:60,
  }
})