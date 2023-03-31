import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import CreditCard from '../../Components/Profile/CreditCard';

const ProfileScreen = () => {
  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont();
  }, [])

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <StatusBar/>
      <View style={styles.topContainer}>
        <View style={styles.top}>
          <Text style={styles.myProfileText}>My Profile</Text>
          <AntDesign name="appstore-o" size={24} color="white" />
        </View>
        <View style={styles.profileMain}>
          <View style={styles.profileImage}/>
          <View style={styles.profileData}>
            <Text style={styles.userName}>Parth Katiyar</Text>
            <Text style={styles.usercomm}>+91 9026971112</Text>
            <Text style={styles.usercomm}>parthkatiyar04@gmail.com</Text>
          </View>
        </View>
        <CreditCard/>
      </View>
      <View style={styles.options}>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>
        <OptionCard/>

      </View>
    </View>
  )
}


const OptionCard=()=>{
  return(
    <TouchableOpacity style={styles.OptionCardContainer}>
      <FontAwesome name="user" size={36} color="green" />
      <Text style={styles.optionTitle}>Personal</Text>
      <FontAwesome name="angle-right" size={32} color="green"/>
    </TouchableOpacity>
  )
}

export default ProfileScreen


const styles=StyleSheet.create({
  topContainer:{
    backgroundColor:"green",
    height:"48%",
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    paddingHorizontal:"5%",
    zIndex:100,
  },
  top:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:64,
  },
  myProfileText:{
    fontSize:24,
    textAlign:"left",
    color:"white",
    fontWeight:"600",
  },
  profileMain:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:24,
  },
  profileImage:{
    height:88,
    width:88,
    borderRadius:64,
    backgroundColor:"orange",
  },
  userName:{
    fontSize:32,
    color:"white",
    fontWeight:"500",
  },
  usercomm:{
    fontSize:20,
    marginTop:5,
    color:"white",
    fontWeight:"200"
  },
  options:{
    paddingHorizontal:"5%",
    marginTop:24,
  },
  OptionCardContainer:{
    flexDirection:"row",
    alignItems:"baseline",
    justifyContent:"space-between",
    marginVertical:10,
  },
  optionTitle:{
    fontSize:24,
    fontWeight:"400"
  }
})