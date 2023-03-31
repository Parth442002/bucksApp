import React from "react";
import { Image,  View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const OTPScreen = ({route}) => {
  return(
     
        
        
  <KeyboardAwareScrollView
   
  resetScrollToCoords={{ x: 0, y: 0 }}
  contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center"}}
  scrollEnabled={false}
>

 

<Text style= {{fontSize: 32, fontWeight:500, paddingBottom: 10}}>Enter OTP </Text>
<Text style={{paddingTop: 10, paddingBottom: 30}}> Sent to +919999999999 </Text>


 
     
     <View style={styles.inputView}>
       <TextInput
         style= {styles.inputView}
         
         placeholder='X'
         placeholderTextColor= '003f5c'
         onChangeText={(email) => setEmail(email)}
       />
       </View>

      
       
    

       <TouchableOpacity style={styles.loginBtn}>
       <Text style={styles.loginText}>LOGIN</Text> 
     </TouchableOpacity>

     <Text style={{paddingTop:30}}>Didn't Receive Code?</Text>

     <TouchableOpacity>
    
     <Text style={{paddingTop: 10, color: '#FF6A4A',  textAlign:'center', textDecorationLine:'underline'}}> Login Here </Text> 
     </TouchableOpacity>


   </KeyboardAwareScrollView>
 )
}

export default OTPScreen



const styles = StyleSheet.create({



 image: {
   width: 190,
   height: 180,
   marginBottom: 50,
   


 },
 inputView: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent:"center",
 },

 inputView: {
   backgroundColor: "#fff",
   
   borderRadius: 7
   ,
   width: "70%",
   height: 45,
   marginBottom: 20,
   alignItems: "center",
 },
 

 TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 20,
 },

 loginBtn: {
   width: "80%",
   borderRadius: 25,
   height: 50,
   alignItems: "center",
   justifyContent: "center",
   marginTop: 30,
   backgroundColor: "#FF6A4A",

 },
 loginText:{
   fontWeight:500,
   color: "#fff",
   
 },

 forgot_button: {
   marginTop:20,
   height: 40,
   marginBottom: 60,
   
 },





})