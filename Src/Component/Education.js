import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePress = (index) => {
    setActiveIndex(index);
  };

  const getTextStyle = (index) => {
    return index === activeIndex ? styles.activeText : styles.text1;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress(0)}>
        <Text style={getTextStyle(0)}>Education |</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(1)}>
        <Text style={getTextStyle(1)}>Site Map |</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(2)}>
        <Text style={getTextStyle(2)}>Privacy Policy |</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(3)}>
        <Text style={getTextStyle(3)}>T & C |</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: "5%",
    paddingHorizontal: '9%',
    
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', // Default color
  },
  activeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'goldenrod', // Color when active
    textDecorationLine: 'underline', // Underline when active
  },
});

export default Education;



