import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import { Feather, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons'
import constants from '../../Assets/constants'
const CategorySet = () => {
  useEffect(() => {
    Ionicons.loadFont();
    MaterialCommunityIcons.loadFont();
    Feather.loadFont();
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Ionicons
          name="fast-food-outline"
          size={24}
          color={constants.primaryOrange}
          style={{padding:20,backgroundColor:constants.gray}}
        />
        <Text style={styles.text}>Food</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
        <MaterialCommunityIcons
          name="movie-check-outline"
          size={24}
          color={constants.primaryOrange}
          style={{padding:20,backgroundColor:constants.gray}}
        />
        <Text style={styles.text}>Entertainment</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
        <Ionicons
          name="fast-food-outline"
          size={24}
          color={constants.primaryOrange}
          style={{padding:20,backgroundColor:constants.gray}}
        />
        <Text style={styles.text}>Services</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
        <Feather name="shopping-cart" size={24}

          color={constants.primaryOrange}
          style={{padding:20,backgroundColor:constants.gray}}
        />
        <Text style={styles.text}>Retail</Text>
    </TouchableOpacity>
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
  text:{
    fontSize:12,
    marginTop:5,
    color:"black",
  }
})






