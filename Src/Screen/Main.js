

  import React, {useState, useRef} from 'react';
  import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    Modal,
    TouchableOpacity,
    PanResponder,
    Animated,
    Image,
    Switch
  } from 'react-native';
  import MapView, {Marker} from 'react-native-maps';
  import locations from "./../../location.json";
  
  const Main = () => {
      const [isEnabled, setIsEnabled] = useState(false);
      const toggleSwitch = () => setIsEnabled(previousState => !previousState);
      const [mapRegion, setMapRegion] = useState({
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
      const [modalVisible, setModalVisible] = useState(false);
      const pan = useRef(new Animated.Value(0)).current; // Create an animated value
    
      // Create PanResponder
      const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: (evt, gestureState) => {
            return gestureState.dy > 20; // Start responding if user drags down
          },
          onPanResponderMove: (evt, gestureState) => {
            pan.setValue(gestureState.dy); // Set the animated value to the gesture's vertical movement
          },
          onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dy > 100) {
              // If dragged down enough, close the modal
              setModalVisible(false);
            } else {
              // Reset position if not enough drag
              Animated.spring(pan, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }
          },
        }),
      ).current;
    
      return (
        <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={mapRegion}
          onRegionChangeComplete={setMapRegion}>
          {locations.map(location => (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.name}
            />
          ))}
        </MapView>
  
        {/* Button to open the modal */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Open Modal</Text>
          </TouchableOpacity>
        </View>
  
        {/* Modal implementation */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          style={{backgroundColor:'blue'}}
          onRequestClose={() => setModalVisible(false)}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.modalContainer, {transform: [{translateY: pan}]}]}>
            <View style={styles.modalView}>
              <View style={{backgroundColor: 'white',flexDirection:'row',paddingVertical:10,borderRadius:10}}>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:10}}>
                  <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Battery</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/signal-status.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Network</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/key.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Ignition</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/placeholder.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Geozone</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/bus.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Breakdown</Text>
                </View>
              </View>
              <View style={{backgroundColor: 'white',flexDirection:'row',paddingVertical:10,borderRadius:10,marginTop:10,paddingHorizontal:12}}>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:5}}>
                  <Image source={require("../Assets/tt.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Navigation</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>History</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/placeholder.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Geozone</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/gas-station.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Fuel</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                  <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                  <Text style={{fontSize:12,color:'black'}}>Battery</Text>
                </View>
              </View>
              <View style={{backgroundColor: 'white',flexDirection:"row",borderRadius:10,marginTop:10,justifyContent:'space-between',alignItems:'center',paddingVertical:10,paddingHorizontal:10}}>
               <Text style={{fontSize:12,color:'black',marginRight:150}}>Parking Alarm</Text>
               <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "white" : "green"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
              </View>
              <TouchableOpacity onPress={()=> setModalVisible(false)}>
                <Text style={{color:"red",fontSize:12}}>close</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Modal>
      </SafeAreaView>
      );
    }
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      right: 10,
    },
    openButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      width: 310,
      height: 250,
      backgroundColor: 'ivory',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
  export default Main;
  


