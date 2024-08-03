import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import { hp,wp } from '../Utlis/Responsive';
import Footer from '../Component/Footer';

import Offer from '../Component/offer';
import Colours from '../Utlis/Colours';


const LovedItem = ({image, text1, text2}) => (
  <View style={styles.lovedItemContainer}>
    <Image source={image} style={styles.lovedImage} />
    <Text style={styles.lovedText}>{text1}</Text>
    <Text style={styles.lovedText}>{text2}</Text>
    <TouchableOpacity style={styles.customizeButton}>
      <Text style={styles.customizeButtonText}>Customize Now</Text>
    </TouchableOpacity>
  </View>
);

const GiftItem = ({image, text}) => (
  <View style={styles.giftItemContainer}>
    <Image source={image} style={styles.giftImage} />
    <Text style={styles.giftText}>{text}</Text>
  </View>
);

const BirthdayItem = ({image, text}) => (
  <View style={styles.birthdayItemContainer}>
    <Image source={image} style={styles.birthdayImage} />
    <Text style={styles.birthdayText}>{text}</Text>
  </View>
);






const Main = () => {

 
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Award-Winning Innovation</Text>
          <Image
            source={require('./../Assets/Images/cup.png')}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Create with Angara</Text>
        </View>
        <View style={styles.navbar}>
          <TouchableOpacity>
            <Image
              source={require('./../Assets/Images/bars.png')}
              style={styles.navbarIcon}
            />
          </TouchableOpacity>
          <Text style={styles.navbarTitle}>ANGARA</Text>
          <View style={styles.navbarIconsContainer}>
            <TouchableOpacity>
              <Image
                source={require('./../Assets/Images/heart.png')}
                style={styles.navbarIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./../Assets/Images/purse.png')}
                style={styles.navbarIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require('./../Assets/Images/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity>
          <Image
            source={require('./../Assets/Images/banner.jpg')}
            style={styles.bannerImage}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.overlayText}>It's Your Moment</Text>
            <Text style={styles.overlayText}>Celebrate</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.imageGrid}>
          {[
            {image: require('./../Assets/Images/image1.jpg'), text: 'Earning'},
            {
              image: require('./../Assets/Images/image2.jpg'),
              text: 'Necklaces',
            },
            {
              image: require('./../Assets/Images/image3.jpg'),
              text: 'Braclets',
            },
            {
              image: require('./../Assets/Images/image4.jpg'),
              text: 'Jewellery',
            },
            {
              image: require('./../Assets/Images/image5.jpg'),
              text: 'Gia Collection',
            },
            {image: require('./../Assets/Images/image1.jpg'), text: 'Earning'},
          ].map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <TouchableOpacity>
              <Image source={item.image} style={styles.gridImage} />
              <Text style={styles.gridText}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.lovedSection}>
          <Text style={styles.lovedHeaderText}>Most Loved On Angara</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.lovedImagesContainer}>
            {[
              {
                image: require('./../Assets/Images/image7.jpg'),
                text1: 'Solid Round Diamond',
                text2: '$1699',
              },
              {
                image: require('./../Assets/Images/image8.jpg'),
                text1: 'Lab Grrown Stackable',
                text2: '$2341',
              },
              {
                image: require('./../Assets/Images/image9.jpg'),
                text1: 'Oval Cross Ring',
                text2: '$699',
              },
              {
                image: require('./../Assets/Images/image7.jpg'),
                text1: 'Solid Round Diamond',
                text2: '$1699',
              },
            ].map((item, index) => (
              <LovedItem
                key={index}
                image={item.image}
                text1={item.text1}
                text2={item.text2}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.foreverSection}>
          <TouchableOpacity>
          <Text style={styles.foreverHeaderText}>Forever Starts Here</Text>
          <Image
            source={require('./../Assets/Images/rings.jpg')}
            style={styles.foreverImage}
          />
          </TouchableOpacity>
        </View>







       <View style={styles.foreverSection}>
          <TouchableOpacity>
          <Text style={styles.for}>Engagement Rings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Shop Engagement Rings</Text>
            <Image
              source={require('./../Assets/Images/downarrow.png')} // Make sure to replace with the correct path
              style={styles.downArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require('./../Assets/Images/rings2.jpg')}
            style={styles.foreverImage}
          />
          </TouchableOpacity>
        </View>
 










        <View style={styles.giftsSection}>
          <Text style={styles.giftsHeaderText}>Gifts That Say It All</Text>
          <View style={styles.giftsGrid}>
            {[
              {
                image: require('./../Assets/Images/img1.jpg'),
                text: 'Over $2500',
              },
              {
                image: require('./../Assets/Images/img2.jpg'),
                text: 'over $3500',
              },
              {
                image: require('./../Assets/Images/img3.jpg'),
                text: 'over $4500',
              },
              {
                image: require('./../Assets/Images/img4.jpg'),
                text: 'over $5500',
              },
              {
                image: require('./../Assets/Images/img5.jpg'),
                text: 'over $6500',
              },
              {
                image: require('./../Assets/Images/img1.jpg'),
                text: 'over $3500',
              },
            ].map((item, index) => (
              <GiftItem key={index} image={item.image} text={item.text} />
            ))}
          </View>
        </View>
        <View style={styles.birthdaySection}>
          <Text style={styles.birthdayHeaderText}>
            Make Birthdays More Colorful
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.birthdayScroll}>
            {[
              {
                image: require('./../Assets/Images/imagee1.jpg'),
                text: 'January',
              },
              {
                image: require('./../Assets/Images/imagee2.jpg'),
                text: 'Febuary',
              },
              {
                image: require('./../Assets/Images/imagee3.jpg'),
                text: 'March',
              },
              {
                image: require('./../Assets/Images/imagee4.jpg'),
                text: 'Febuary',
              },
              {
                image: require('./../Assets/Images/imagee5.jpg'),
                text: 'March',
              },
            ].map((item, index) => (
              <BirthdayItem key={index} image={item.image} text={item.text} />
            ))}
          </ScrollView>
        </View>
        <Offer />

        <View style={styles.contactUsSection}>
          <Text style={styles.contactHeader}>Contact Us</Text>
          <View style={styles.contactContainer}>
            <View style={styles.contactItem}>
              <TouchableOpacity>
              <Image
                source={require('./../Assets/Images/phone.png')}
                style={styles.contactImage}
              />
              <Text style={styles.contactText}>Call</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactItem}>
              <TouchableOpacity>
              <Image
                source={require('./../Assets/Images/email.png')}
                style={styles.contactImage}
              />
              <Text style={styles.contactText}>Email</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactItem}>
              <TouchableOpacity>
              <Image
                source={require('./../Assets/Images/comment.png')}
                style={styles.contactImage}
              />
              <Text style={styles.contactText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Footer />

        <View style={styles.paymentMethodsContainer}>
          <View style={styles.paymentMethods}>
            <Image
              source={require('./../Assets/Images/card.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/visa.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/master.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/americanexpress.png')}
              style={styles.paymentMethodImage}
            />
          </View>
          <View style={styles.paymentMethods}>
            <Image
              source={require('./../Assets/Images/amazon-pay.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/card.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/visa.png')}
              style={styles.paymentMethodImage}
            />
            <Image
              source={require('./../Assets/Images/visa.png')}
              style={styles.paymentMethodImage}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colours.secondary,
  },
  headerContainer: {
    backgroundColor: Colours.primary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(0.1),
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  headerText: {
    fontWeight: 'bold',
    color: Colours.secondary,
  },
  headerImage: {
    width: wp(3),
    height: hp(3),
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: Colours.secondary,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: hp(2),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
  },
  navbarIcon: {
    width: wp(7),
    height: hp(5),
    resizeMode: 'contain',
  },
  navbarTitle: {
    fontSize: hp(3.5),
    color: Colours.primary,
    marginTop: hp(0.7),
  },
  navbarIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
  },
  searchContainer: {
    width: '100%',
    paddingHorizontal: wp(2),
    marginTop: hp(2),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colours.primary,
    borderRadius: 5,
    paddingHorizontal: wp(3),
    backgroundColor: Colours.secondary,
  },
  searchIcon: {
    width: wp(9),
    height: hp(5),
    resizeMode: 'contain',
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    fontSize: hp(2),
    color: Colours.primary,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: wp(2),
  },
  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  gridImage: {
    width: wp(25),
    height: hp(20),
    resizeMode: 'contain',
  },
  gridText: {
    marginTop: hp(1),
    fontSize: hp(2),
    textAlign: 'center',
    color: Colours.primary,
  },
  bannerImage: {
    width: '70%',
    height: wp(50),
    resizeMode: 'cover',
    marginVertical: hp(2),
    borderRadius: 2,
  },
  lovedSection: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  lovedHeaderText: {
    fontSize: hp(3),
    color: Colours.primary,
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  lovedImagesContainer: {
    flexDirection: 'row',
  },
  lovedItemContainer: {
    alignItems: 'center',
    marginRight: wp(3),
  },
  lovedImage: {
    width: wp(30),
    height: hp(20),
    resizeMode: 'contain',
  },
  lovedText: {
    marginTop: hp(1),
    fontSize: hp(2),
    textAlign: 'center',
    color: Colours.primary,
  },
  customizeButton: {
    marginTop: hp(1),
    backgroundColor: Colours.secondary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderWidth: 1,
  },
  customizeButtonText: {
    color: Colours.primary,
    fontWeight: '400',
  },
  giftsSection: {
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  giftsHeaderText: {
    color: Colours.primary,
    fontWeight: 'bold',
    fontSize: hp(3),
    textAlign: 'center',
    marginBottom: hp(0.5),
  },
  giftsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  giftItemContainer: {
    width: '30%',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  giftImage: {
    width: wp(25),
    height: hp(20),
    resizeMode: 'contain',
  },
  giftText: {
    marginTop: hp(1),
    fontSize: hp(2),
    textAlign: 'center',
    color: Colours.primary,
    letterSpacing: 1,
  },
  paymentMethodsContainer: {
    backgroundColor: 'whitesmoke',
    marginTop: hp(2),
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  paymentMethodImage: {
    width: wp(18),
    height: hp(10),
    resizeMode: 'contain',
  },
  birthdaySection: {
    backgroundColor: Colours.secondary,
    alignItems: 'center',
    paddingVertical: hp(2),
    marginTop: hp(2),
  },
  birthdayHeaderText: {
    fontWeight: 'bold',
    color: Colours.primary,
    fontSize: hp(3),
    textAlign: 'center',
    marginBottom: hp(2),
  },
  birthdayGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  birthdayItemContainer: {
    width: '30%',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  birthdayImage: {
    width: wp(25),
    height: hp(20),

    resizeMode: 'contain',
  },
  birthdayText: {
    marginTop: hp(1),
    fontSize: hp(2),
    textAlign: 'center',
    color: Colours.primary,
  },
  foreverSection: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
  foreverHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colours.primary,
    marginBottom: hp(2),
    textAlign: 'center',
  },
  foreverImage: {
    width: '100%',
    height: hp(25),
    resizeMode: 'cover',
  },
  for: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colours.primary,
    marginBottom: hp(2),
    textAlign: 'center',
  },
  shopButton: {
    backgroundColor: Colours.secondary,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    borderRadius: 5,
    marginVertical: hp(2),
    borderWidth: 1,
    paddingHorizontal: wp(10),
    flexDirection: 'row',
  },
  shopButtonText: {
    color: Colours.primary,
    fontWeight: 'bold',
    fontSize: hp(2.8),
  },
  downArrow: {
    width: wp(5),
    height: hp(3),
    resizeMode: 'contain',
    marginLeft: wp(13),
    marginTop: hp(0.3),
  },
  contactUsSection: {
    paddingHorizontal: wp(2),
    marginVertical: hp(2),
    backgroundColor: 'whitesmoke',
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: hp(3),
    color: Colours.primary,
    alignSelf: 'center',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contactItem: {
    width: wp('30%'),
    alignItems: 'center',
    marginVertical: hp(2),
  },
  contactImage: {
    width: wp(10),
    height: hp(10),
    resizeMode: 'contain',
  },
  contactText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 2,
    color: Colours.primary,
  },
  imageContainer: {width: '100%', height: wp(50), resizeMode: 'cover', marginVertical: hp(2), borderRadius: 2,},
  bannerImage: {width: '100%', height: '100%', resizeMode: 'cover'},
  textWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  overlayText: {
    color: Colours.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 
});

export default Main;

