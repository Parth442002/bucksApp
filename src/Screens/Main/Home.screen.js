import { View, Text } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TopSection from '../../Components/Home/TopSection'
import { StatusBar } from 'expo-status-bar'
import SearchInputField from '../../Components/Home/SearchInputField'
import CategorySet from '../../Components/Home/CategorySet'
import HomeCarousel from '../../data/HomeCarousel'
import PartnerCards from '../../Components/Home/PartnerCards'


const HomeScreen = () => {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{marginTop:48}}
      scrollEnabled={true}
    >
      <StatusBar/>
      <TopSection/>
      <SearchInputField/>
      <CategorySet/>
      <HomeCarousel/>
      <PartnerCards/>
    </KeyboardAwareScrollView>
  )
}

export default HomeScreen


{/*
<StatusBar/>
      <TopSection/>
      <SearchInputField/>
      <CategorySet/>
      <HomeCarousel/>

*/}