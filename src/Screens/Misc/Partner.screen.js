import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity,Linking } from 'react-native'
import React,{useEffect} from 'react'
import constants from "../../Assets/constants"
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons'

const PartnerScreen = () => {
  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont();
    SimpleLineIcons.loadFont();
  }, [])

  return (
    <View style={{flex:1,backgroundColor:constants.backGroundColor}}>
      <View style={styles.topContainer}>
        <View style={styles.top}>
          <FontAwesome name="angle-left" size={32} color="white" />
          <Text style={styles.myProfileText}>Partner Details</Text>
          <AntDesign name="appstore-o" size={24} color="white" />
        </View>
        <View style={styles.partnerMain}>
          <View style={styles.partnerImage}/>
          <View style={styles.profileData}>
            <Text style={styles.userName}>Nike Store</Text>
            <Text style={styles.usercomm}>+91 9026971112</Text>
            <Text style={styles.usercomm}>parthkatiyar04@gmail.com</Text>
          </View>
        </View>
        <View style={styles.properties}>
          <View style={styles.left}>
            <Text style={styles.open_status}>Open Now</Text>
          </View>
          <View>
            <Text style={styles.rating}>5 stars</Text>
          </View>
        </View>
      </View>


      <TouchableOpacity
            onPress={() => Linking.openURL('maps://app?saddr=100+101&daddr=100+102')}
            style={styles.directions}
          >
            <Text style={{fontSize:16,color:"white",textAlign:"center",}}>Directions</Text>
          </TouchableOpacity>

    </View>
  )
}

export default PartnerScreen

const styles=StyleSheet.create({
  topContainer:{
    backgroundColor:"green",
    height:"40%",
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    paddingHorizontal:"5%",
    zIndex:100,
  },
  top:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:64,
  },
  myProfileText:{
    fontSize:24,
    textAlign:"left",
    color:"white",
    fontWeight:"600",
  },
  partnerMain:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:24,
  },
  partnerImage:{
    height:88,
    width:120,
    borderRadius:10,
    backgroundColor:"orange",
  },
  userName:{
    fontSize:32,
    color:"white",
    fontWeight:"500",
  },
  usercomm:{
    fontSize:20,
    marginTop:5,
    color:"white",
    fontWeight:"200"
  },
  properties:{
    marginTop:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  open_status:{
    fontSize:20,
    color:constants.backGroundColor,
    fontWeight:"600",
  },
  rating:{
    fontSize:20,
    color:"white",
  },
  directions:{
    padding:10,
    width:"90%",
    alignSelf:"center",
    textAlign:"center",
    paddingHorizontal:20,
    backgroundColor:constants.lightGreen,
    borderRadius:10,
  }
})