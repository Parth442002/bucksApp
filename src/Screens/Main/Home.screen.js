import React,{useContext,useEffect} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import constants from '../../Assets/constants';
import {MyContext} from "../../context/userContext";
import TopSection from '../../Components/Home/TopSection'
import { StatusBar } from 'expo-status-bar'
import SearchInputField from '../../Components/Home/SearchInputField'
import CategorySet from '../../Components/Home/CategorySet'
import HomeCarousel from '../../data/HomeCarousel'
import PartnerCards from '../../Components/Home/PartnerCards'


const HomeScreen = () => {
  const { myState, setMyState } = useContext(MyContext);
  console.log(myState,"shit")
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{marginTop:48,backgroundColor:constants.backGroundColor}}
      style={{backgroundColor:constants.backGroundColor}}
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

