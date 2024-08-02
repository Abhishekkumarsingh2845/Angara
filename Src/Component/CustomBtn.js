import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp,wp } from '../Utlis/Responsive'

const CustomBtn = () => {
  return (
    <View style={{width:'90%',alignSelf:'center',backgroundColor:'white',borderColor:'black',borderWidth:1.5}}>
     <Text style={{color:"black",alignSelf:'center',marginVertical:hp(1.5),fontSize:hp(2)}}>Customize Now</Text>
    </View>
  )
}

export default CustomBtn

const styles = StyleSheet.create({})