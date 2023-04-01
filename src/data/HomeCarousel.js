import { StyleSheet, Text, View,Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'expo-image';
import { AntDesign,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import globals from "../Assets/constants"

const windowWidth = Dimensions.get('window').width;

const data = [
  {
    image:require("../Assets/Images/Vertical1.png"),
    id:1
  },
  {
    image:require("../Assets/Images/Vertical2.png"),
    id:2
  }
  ];

const HomeCarousel = () => {
  useEffect(() => {
    AntDesign.loadFont()
    Entypo.loadFont()
    MaterialCommunityIcons.loadFont()
  }, [])

  return (
    <View
    style={{marginVertical:20}}
    >
      <FlatList
      data={data}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.listContainer}
      keyExtractor={(_,index)=>index.toString()}
      renderItem={(item)=>{
        return(
          <CarouselCard item={item}/>
        )
      }}
      />
    </View>

  )
}

export const CarouselCard=(item)=>{
  return(
    <TouchableOpacity style={styles.cardContaner}>
      <Image
        source={{uri:item.image}}
        focusable
        style={{width:windowWidth*.6,
          height:250}}
      />
    </TouchableOpacity>
  )
}

export default HomeCarousel

const styles = StyleSheet.create({
  listContainer:{
    maxHeight:250,
  },
  cardContaner:{
    backgroundColor:"lightblue",
    width:windowWidth*.6,
    height:250,
    flexDirection:"row",
    borderRadius:10,
    marginHorizontal:10,
    justifyContent:"flex-start",
  },
})