import { View, Text,StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';

const TopSection = () => {
  useEffect(() => {
    Ionicons.loadFont();
  }, [])

  return (
    <View style={styles.main}>
      <View style={styles.leftMain}>
        <Ionicons name="navigate" size={32} color="blue" />
        <Text style={styles.location}>Potheri</Text>
      </View>
      <View style={styles.userIcon}/>
    </View>
  )
}

export default TopSection


const styles=StyleSheet.create({
  main:{
    width:"100%",
    paddingHorizontal:20,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    //position:"absolute",
    //top:"5%",
  },
  leftMain:{
    flexDirection:"row",
    alignItems:"center",
  },
  location:{
    marginLeft:10,
    fontSize:24,
    fontWeight:"600"
  },
  userIcon:{
    height:48,
    width:48,
    borderRadius:48,
    backgroundColor:"lightgray"
  }
})