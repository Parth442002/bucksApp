import { View, Text,StyleSheet } from 'react-native'
import React,{useContext, useEffect} from 'react'
import { FontAwesome ,Ionicons} from '@expo/vector-icons';
import constants from '../../Assets/constants';
import { MyContext } from '../../context/userContext';

const TopSection = () => {

  useEffect(() => {
    Ionicons.loadFont();
    FontAwesome.loadFont();
  }, [])

  return (
    <View style={styles.main}>
      <View style={styles.leftMain}>
        <Ionicons name="navigate" size={32} color={constants.darkGreen} />
        <Text style={styles.location}>Potheri</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",}}>
        <Text style={{fontSize:24,marginRight:5,fontWeight:"400",fontStyle:"italic"}}>Parth</Text>
        <FontAwesome name="user-circle" size={32} color={constants.blackColor}/>
      </View>
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