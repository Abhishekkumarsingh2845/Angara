import { StyleSheet, TextInput, View, Image } from 'react-native';
import React from 'react';
import { wp, hp } from '../Utlis/Responsive';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="SEARCH"
          placeholderTextColor="grey"
          style={styles.textInput}
        />
        <Image
          source={require('./../Assets/Images/search.png')} // Replace with your image path
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchContainer: {
    width: '93%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: hp(0.2),
    borderColor: 'black',
    borderRadius:7,
  },
  textInput: {
    flex: 1,
    paddingLeft: wp(10), // Add padding to make space for the image
    color: 'black',
    marginLeft:wp(4),
    letterSpacing:2,
  
  },
  image: {
    position: 'absolute',
    marginLeft: wp(2),
    width: wp(8),
    height: wp(9),
    resizeMode:'contain',
  },
});
