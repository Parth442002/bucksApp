import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const CategorySet = () => {
  return (
    <View style={styles.container}>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
    </View>
  )
}


const CategoryCard=()=>{
  return(
    <View style={styles.card}>
        <View style={styles.image}/>
        <Text style={styles.text}>Food</Text>
    </View>
  )
}
export default CategorySet



const styles=StyleSheet.create({
  container:{
    //position:"absolute",
    //top:"22%",
    flexDirection:"row",
    alignItems:"center",
    marginTop:32,
  },
  card:{
    marginHorizontal:20,
    flexDirection:"column",
    alignItems:"center",
  },
  image:{
    height:72,
    width:64,
    backgroundColor:"lightgray",
    borderRadius:10,
  }
})






