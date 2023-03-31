import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { Feather } from '@expo/vector-icons';

const SearchInputField = () => {
  useEffect(() => {
    Feather.loadFont();
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search for Shops, Offers'
        style={styles.textInput}
      />
      <Feather
        name="search"
        size={24}
        color="blue"
        style={styles.search}
      />
    </View>
  )
}

export default SearchInputField

const styles=StyleSheet.create({
  container:{
    backgroundColor:"lightgray",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"80%",
    borderRadius:10,
    //position:"absolute",
    //top:"14%",
    alignSelf:"center",
    marginTop:24,
  },
  textInput:{
    fontSize:20,
    paddingVertical:10,
    paddingHorizontal:12,
    paddingLeft:40,
  },
  search:{
    marginRight:16,
  }
})