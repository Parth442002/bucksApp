import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign ,FontAwesome} from '@expo/vector-icons'

const RewardsScreen = () => {
  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont()
  }, [])

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"green"}}>
      <View style={styles.top}>
          <AntDesign name="API" size={24} color="white" />
          <Text style={styles.myProfileText}>Rewards</Text>
          <AntDesign name="questioncircleo" size={24} color="white" />
      </View>
      <View style={styles.middle}>
        <View style={styles.icon}/>
        <Text style={styles.heading}>Bucks Rewards</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <FontAwesome name="rupee" size={40} color="gold"/>
          <Text style={styles.amount}>3000</Text>
        </View>
        <Text style={styles.lorenIpsum}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <View style={styles.iconPrimary}/>
          <Text style={styles.buttonText}>Redeem Bucks Reward</Text>
          <FontAwesome name="angle-down" size={32} color="green"/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.primaryButton,{backgroundColor:"green"}]}>
          <View style={styles.iconPrimary}/>
          <Text style={[styles.buttonText,{color:"white"}]}>Earn Bucks Reward</Text>
          <FontAwesome name="angle-down" size={32} color="white"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}




export default RewardsScreen


const styles=StyleSheet.create({
  top:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"5%",
    marginTop:10,
  },
  myProfileText:{
    fontSize:24,
    textAlign:"left",
    color:"white",
    fontWeight:"600",
  },
  middle:{
    alignItems:"center",
    marginTop:40,
  },
  icon:{
    height:150,
    width:150,
    borderRadius:20,
    backgroundColor:"yellow"
  },
  heading:{
    marginVertical:20,
    fontSize:32,
    color:"white",
    fontWeight:"700",
  },
  amount:{
    fontSize:40,
    color:"gold",
    fontWeight:"800",
    marginLeft:10
  },
  lorenIpsum:{
    color:"white",
    fontWeight:"200",
    marginTop:30,
    maxWidth:"80%",
  },
  menuContainer:{
    position:"absolute",
    bottom:20,
    height:325,
    backgroundColor:"white",
    width:"100%",
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
  },
  primaryButton:{
    alignSelf:"center",
    flexDirection:"row",
    marginTop:40,
    backgroundColor:"lightgray",
    width:"80%",
    paddingVertical:20,
    paddingHorizontal:20,
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius:20,
  },
  iconPrimary:{
    height:"90%",
    width:50,
    backgroundColor:"white",
  },
  buttonText:{
    fontSize:16,
  }

})