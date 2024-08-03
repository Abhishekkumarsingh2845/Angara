// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Timer to navigate to the main screen after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Main'); // Replace with your main screen's name
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../Assets/Images/logo.jpeg')} // Ensure this path is correct
        style={styles.logo}
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background color
  },
  logo: {
    width: width * 0.6, // Adjust as needed
    height: height * 0.3, // Adjust as needed
    resizeMode: 'contain',
  },
});

export default SplashScreen;
