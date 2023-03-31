import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'

import { AntDesign,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';

import constants from "../../Assets/constants"

const TabBarIcon = ({name,labelName,focused,color}) => {
  useEffect(() => {
    AntDesign.loadFont()
    FontAwesome.loadFont()
    MaterialCommunityIcons.loadFont()
  }, [])

  return (
    <View style={styles.parent}>
      {name=="bookmark-o"?
      <FontAwesome
        name={name}
        size={30}
        color={focused?`black`:`gray`}
      />
    :
    <AntDesign
        name={name}
        size={30}
        style={{fontWeight:"900"}}
        color={focused?`black`:`gray`}/>
    }
    <Text
        style={[styles.label,{color:focused?`black`:`gray`},]}
        >{labelName}</Text>
    </View>
  )
}
export default TabBarIcon

export const CustomTabBarIcon=({focused})=>{
  useEffect(() => {
    MaterialCommunityIcons.loadFont()
  }, [])

  return(
    <View style={styles.customParent}>
      <MaterialCommunityIcons
        name={"plus"}
        size={45}
        color="white"/>
    </View>
  )
}

export const CustomTabBarButton=({children,onPress})=>{
  return(
  <TouchableOpacity
    style={styles.customTab}
    onPress={onPress}
  >
      <View style={styles.customView}>
        {children}
      </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  parent:{
    top:"35%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  label:{
    //display:"none",
  },
  customTab:{
    top:-20,
    alignItems:"center",
    justifyContent:"center",
    elevation:20,
    zIndex:100,
  },
  customView:{
    width:60,
    height:60,
    borderRadius:35,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:constants.primaryOrange,
    borderWidth:1,
    borderColor:constants.primaryBlack,
  },
})