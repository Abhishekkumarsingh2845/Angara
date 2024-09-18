<SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChangeComplete={setMapRegion}>
        {staticLocations.map(location => (
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
       
        onRequestClose={() => setModalVisible(false)}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.modalContainer, {transform: [{translateY: pan}]}]}>
          <View style={styles.modalView}>
            <View style={{backgroundColor: 'red',flexDirection:'row',paddingVertical:10,borderRadius:10}}>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:10}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
            </View>
            <View style={{backgroundColor: 'red',flexDirection:'row',paddingVertical:10,borderRadius:10}}>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:10}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:"center",marginLeft:20}}>
                <Image source={require("../Assets/battery.png")} style={{width:25,height:25,resizeMode:'contain'}}/>
                <Text>Battery</Text>
              </View>
            </View>
            <View style={{backgroundColor: 'red',flexDirection:"row",paddingVertical:10,borderRadius:10,paddingHorizontal:80}}>
             <Text style={{}}>Parking Alarm</Text>
             <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
            </View>
            <Button
              title="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Animated.View>
      </Modal>
    </SafeAreaView>