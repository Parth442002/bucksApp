import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginScreen = () => {
  return (
    <KeyboardAwareScrollView
      //style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center"}}
      scrollEnabled={false}
    >
      <Text>Login Form</Text>
        <TextInput
          placeholder="Email/Phone"
          //style={styles.input}
        />
        <TextInput
          placeholder="Password"
          //style={styles.input}
        />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen



const styles = StyleSheet.create({

})