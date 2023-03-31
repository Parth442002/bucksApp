import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const CreditCard = ({
  holdername="PARTH KATIYAR",valid_from="4 April 22",valid_till="30 January 2030",type="Regular",status= true,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.LottieContainer}>
        <LottieView
            autoPlay
            source={require("../../Assets/LottieFiles/cardGradient.json")}
          />
        <Text style={styles.cardHolderName}>{holdername}</Text>
        <Text style={styles.validFrom}>FROM- <Text>{valid_from}</Text></Text>
        <Text style={styles.validTill}>TO- <Text>{valid_till}</Text></Text>
        <Text style={{...styles.validTill,marginTop:10}}>Type <Text>{type}</Text></Text>
        <Image
          style={styles.masterCard}
          source={{uri:"https://toppng.com/uploads/preview/visa-us-vector-logo-free-download-11574017219rwlbxkijxr.png"}}
        />
      </View>

    </View>
  )
}



export default CreditCard

const styles = StyleSheet.create({
  LottieContainer:{
    width:"100%",
    alignSelf:"center",
    marginTop:40,
    height:180,
    borderRadius:10,
    backgroundColor:"red",
    overflow:"hidden",
    position:"relative",
    bottom:0,
  },
  cardHolderName:{
    position:'relative',
    top:10,
    left:10,
    fontSize:20,
    color:"white",
    fontWeight:"700",
  },
  validFrom:{
    position:"relative",
    top:30,
    left:10,
    fontWeight:"700",
    color:"white"
  },
  validTill:{
    position:"relative",
    top:40,
    left:10,
    fontWeight:"700",
    color:"white"
  },
  masterCard:{
    height:60,
    position:"absolute",
    width:60,
    backgroundColor:"transparent",
    top:60,
    right:25,
    borderRadius:10,
  }
})