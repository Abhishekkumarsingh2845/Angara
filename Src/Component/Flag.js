
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { hp,wp } from '../Utlis/Responsive';
const Flag = () => {
  return (
    <View
      style={{
        backgroundColor: 'whitesmoke',
        width: '100%',
       marginHorizontal:wp(2),
        flexDirection:'row',
        // paddingHorizontal:"3%"
        marginTop:hp(2),
      }}>
        <Image source={require("./../Assets/Images/flag.png")} style={{ width: wp(10),
    height: hp(4),
    resizeMode: 'contain',}}/>
      <Text
        style={{
            marginTop:hp(0.4),
          fontSize: hp(2.5),
          color:'black',
          textDecorationLine: 'underline',
          fontWeight: '500',
        }}>
        United States (USB)
      </Text>
    </View>
  );
};

export default Flag;

const styles = StyleSheet.create({});





