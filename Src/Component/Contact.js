import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import { wp, hp } from '../Utlis/Responsive';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <ScrollView 
        style={styles.contactDetailsContainer} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.contactItem}>
          <Image
            source={require('./../Assets/Images/phone.png')}
            style={styles.image}
          />
          <Text style={styles.contactText}>Phone</Text>
        </View>
        <View style={styles.contactItem}>
          <Image
            source={require('./../Assets/Images/email.png')}
            style={styles.image}
          />
          <Text style={styles.contactText}>Email</Text>
        </View>
        <View style={styles.contactItem}>
          <Image
            source={require('./../Assets/Images/comment.png')}
            style={styles.image}
          />
          <Text style={styles.contactText}>Chat</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    width: '100%',
    marginTop:hp(2),
   

  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: hp(3.5),
    marginBottom: wp(3),
    color: 'black',
    marginRight:"20%",
    marginTop:hp(2),
  
  },
  contactDetailsContainer: {
    marginTop: hp(0.4),
    marginHorizontal:wp(2)
    
  },
  contactItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: wp(10),
    marginVertical:hp(3),  // Adjust this value to change the spacing between items
  },
  image: {
    width: wp(10),
    height: hp(4),
    marginBottom: 10,
    resizeMode: 'contain',
  },
  contactText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Contact;