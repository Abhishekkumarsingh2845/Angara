
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp } from '../Utlis/Responsive';

const Footer = () => {
  const handlePress = (item) => {
    // Handle the press event, e.g., navigate to a different screen or show a modal
    console.log(`${item} clicked`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('ASSISTANCE')}>
        <View style={styles.item}>
          <Text style={styles.text}>ASSISTANCE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('ABOUT US')}>
        <View style={styles.item}>
          <Text style={styles.text}>ABOUT US</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('EXPERIENCE ANGARA')}>
        <View style={styles.item}>
          <Text style={styles.text}>EXPERIENCE ANGARA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('PARTNER WITH US')}>
        <View style={styles.item}>
          <Text style={styles.text}>PARTNER WITH US</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('SHOP')}>
        <View style={styles.item}>
          <Text style={styles.text}>SHOP</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('PROMOTIONS')}>
        <View style={styles.item}>
          <Text style={styles.text}>PROMOTIONS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    marginTop:hp(2),
  },
  item: {
    marginVertical: '3.5%',
  },
  text: {
    color:'black',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default Footer;