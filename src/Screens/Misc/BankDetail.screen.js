import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import {data} from "../../data/BankDetailsData"
import CreditCard from '../../Components/Profile/CreditCard';

const BankDetailScreen = () => {
  useEffect(() => {
    AntDesign.loadFont();
    FontAwesome.loadFont();
  }, [])

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <StatusBar/>
      <View style={styles.topContainer}>
        <View style={styles.top}>
          <FontAwesome name="angle-left" size={32} color="white" />
          <Text style={styles.myProfileText}>Account Details</Text>
          <AntDesign name="appstore-o" size={24} color="white" />
        </View>
        <View style={styles.profileMain}>
          <View style={styles.profileImage}/>
          <View style={styles.profileData}>
            <Text style={styles.userName}>Parth Katiyar</Text>
            <Text style={styles.usercomm}>+91 9026971112</Text>
            <Text style={styles.usercomm}>parthkatiyar04@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.bank_data}>
          <Text style={styles.accountType}>{data.bank_type} Account</Text>
          <Text style={styles.generalInfo}>Account Number - {data.number}</Text>
          <Text style={styles.generalInfo}>Account IFSC - {data.ifsc}</Text>
          <Text style={styles.generalInfo}>Bank - {data.details.BANK}</Text>
          <Text style={styles.generalInfo}>City - 🇮🇳{data.details.CITY}</Text>
          <Text style={styles.generalInfo}>State - {data.details.STATE}</Text>
          <FlatList
            data={data.cards}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
      </View>
    </View>
  )
}


const renderItem = ({item}) => {
  return (
    <CreditCard type={item.card_type}/>
  );
};


export default BankDetailScreen


const styles=StyleSheet.create({
  topContainer:{
    backgroundColor:"green",
    height:"28%",
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
  profileMain:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:24,
  },
  profileImage:{
    height:88,
    width:88,
    borderRadius:64,
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
  bank_data:{
    marginTop:20,
    alignSelf:"center",
  },
  generalInfo:{
    textAlign:"center",
    fontSize:20,
    fontStyle:"italic",
    marginVertical:5,
  },
  cardContainer:{
    height:150,
    marginVertical:10,
    width:"100%",
    alignSelf:"center",
    backgroundColor:"lightblue",
  },
  accountType:{
    textAlign:"center",
    fontSize:32,
    fontWeight:"600",
    color:"gold",
  }
})