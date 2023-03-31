import { Image,  View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = () => {
  return (
    
      
        
        
  <KeyboardAwareScrollView
   
   resetScrollToCoords={{ x: 0, y: 0 }}
   contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center"}}
   scrollEnabled={false}
 >

  

<Text style= {{fontSize: 32, fontWeight:500, paddingBottom: 20}}>Welcome Back! </Text>



  
<Image style={styles.image} source = {require("../../Assets/Images/Logo.png")}/>
      
      <View style={styles.inputView}>
        <TextInput
          style= {styles.inputView}
          
          placeholder='Email/Phone No.'
          placeholderTextColor= '003f5c'
          onChangeText={(email) => setEmail(email)}
        />
        </View>

        <View style={styles.inputView}>
        <TextInput
          style= {styles.inputView}
          placeholder='Password'
          placeholderTextColor= '003f5c'
          secureTextEntry={true}


          onChangeText={(password) => setPassword(password)}
        />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}> Forgot Password? </Text> 
      </TouchableOpacity>


    </KeyboardAwareScrollView>
  )
}

export default LoginScreen



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