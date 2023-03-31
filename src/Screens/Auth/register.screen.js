import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView
      //style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center"}}
      scrollEnabled={false}
    >
      <Text>Register Form</Text>
        <TextInput
          placeholder="Email/Phone"
          //style={styles.input}
        />
        <TextInput
          placeholder="Password"
          //style={styles.input}
        />
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}

export default RegisterScreen



const styles = StyleSheet.create({

})