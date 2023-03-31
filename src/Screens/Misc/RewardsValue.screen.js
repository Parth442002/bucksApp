import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React,{useEffect} from 'react'
import { AntDesign ,FontAwesome} from '@expo/vector-icons'

const RewardsValueScreen = () => {
  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont()
  }, [])

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"green"}}>
      <View style={styles.top}>
          <TouchableOpacity>
            <FontAwesome name="angle-left" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.myProfileText}>Rewards</Text>
          <AntDesign name="questioncircleo" size={24} color="white" />
      </View>
      <View style={styles.middle}>
        <View style={styles.icon}/>
        <Text style={styles.heading}>Bucks Rewards</Text>
      </View>
      <TextInput
        placeholder={"6 DIGIT CODE"}
        style={styles.codeInput}
        maxLength={6}
        autoFocus={true}
      />
    </SafeAreaView>
  )
}




export default RewardsValueScreen


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
    marginTop:80,
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
  codeInput:{
    alignSelf:"center",
    backgroundColor:"white",
    width:"60%",
    paddingVertical:10,
    paddingHorizontal:40,
    paddingLeft:30,
    fontSize:24,
    borderRadius:12,
  }
})