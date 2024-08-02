import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from './Src/Utlis/Responsive';
import Search from './Src/Component/Search';
import CustomBtn from './Src/Component/CustomBtn';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <ScrollView>
      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: hp(0.5),
          alignItems: 'center',
          paddingVertical: hp(2),
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          Award-Winning Innovation
        </Text>
        <Image
          source={require('././Src/Assets/Images/cup.png')}
          style={{width: wp(3), height: hp(3)}}
        />
        <Text style={{fontWeight: 'bold', color: 'white'}}>
          Create with Angara
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'blue',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <Image
          source={require('./Src/Assets/Images/bars.png')}
          style={{
            width: wp(6),
            height: hp(3),
            resizeMode: 'contain',
            backgroundColor: 'green',
          }}
        />
        <Text style={{fontSize: hp(3.5)}}>ANGARA</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '20%',
            backgroundColor: 'red',
          }}>
          <Image
            source={require('./Src/Assets/Images/heart.png')}
            style={{width: wp(5), height: hp(5), resizeMode: 'contain'}}
          />
          <Image
            source={require('./Src/Assets/Images/bars.png')}
            style={{width: wp(5), height: hp(5), resizeMode: 'contain'}}
          />
        </View>
      </View>

      <Search />
      <View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
          <View>
            <Image source={require('./Src/Assets/Images/image1.jpg')} />
            <Text style={{fontSize: hp(3), color: 'grey', alignSelf: 'center'}}>
              Rings
            </Text>
          </View>
        </View>
      </View>





      <View style={{backgroundColor: 'green', width: '100%'}}>
        <Text style={{fontWeight: 'bold', color: 'black', alignSelf: 'center'}}>
          Most Loved On Angara
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{backgroundColor: 'red'}}>
            <Image
              source={require('./Src/Assets/Images/heart.png')}
              style={{
                width: wp(5),
                height: hp(5),
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
            />
             <Image
              source={require('./Src/Assets/Images/image5.jpg')}
              style={{
                width: wp(9),
                height: hp(9),
                resizeMode: 'contain',
                alignSelf: 'center',
                backgroundColor:'yellow'
              }}
            />
            <Text>Solitaire Round Diamond Infinite </Text>
            <Text>$669</Text>
            <CustomBtn/>
          </View>
          <View style={{backgroundColor: 'red'}}>
            <Image
              source={require('./Src/Assets/Images/heart.png')}
              style={{
                width: wp(5),
                height: hp(5),
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
            />
             <Image
              source={require('./Src/Assets/Images/image5.jpg')}
              style={{
                width: wp(9),
                height: hp(9),
                resizeMode: 'contain',
                alignSelf: 'center',
                backgroundColor:'yellow'
              }}
            />
            <Text>Solitaire Round Diamond Infinite </Text>
            <Text>$669</Text>
            <CustomBtn/>
          </View>
        </View>
      </View>




      </ScrollView>

    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Search from './Src/Component/Search'
// import CustomBtn from './Src/Component/CustomBtn'

// const App = () => {
//   return (
//     <View>
//     <CustomBtn/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})


// export default App;























git branch -M main
git remote add origin https://github.com/Abhishekkumarsingh2845/Ecommerce-.git
git push -u origin main