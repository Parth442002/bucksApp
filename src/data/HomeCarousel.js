import { StyleSheet, Text, View,Dimensions,Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign,Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import globals from "../Assets/constants"

const windowWidth = Dimensions.get('window').width;

const data = [
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'
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
          <CarouselCard/>
        )
      }}
      />
    </View>

  )
}

export const CarouselCard=()=>{
  return(
    <TouchableOpacity style={styles.cardContaner}>
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