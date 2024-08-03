import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';

const Offer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Get <Text style={styles.highlight}>12%</Text> off on your first order
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Email Address"
          placeholderTextColor="gray"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.privacyText}>
        Your privacy matters. For details, see our Privacy
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    marginTop: hp(2),
    paddingHorizontal: wp(4), // Added padding to avoid content touching edges
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp(2.5),
    marginBottom: hp(3),
    color: 'black',
    marginTop: hp(2),
  },
  highlight: {
    color: 'goldenrod',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: '60%',
    color: 'black',

    paddingHorizontal: wp(2),
  },
  signUpButton: {
    backgroundColor: 'black',
    paddingVertical: hp(2.6),
    paddingHorizontal: wp(5),
  },
  signUpText: {
    color: 'white',
    fontWeight: 'bold',
  },
  privacyText: {
    textAlign: 'center',
    color: 'dimgrey',
    marginVertical: hp(1),
  },
  underline: {
    textDecorationLine: 'underline',
  },
  underlinee: {
    textDecorationLine: 'underline',
  },
});

export default Offer;
