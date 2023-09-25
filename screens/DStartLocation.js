import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback, useContext} from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { useDispatch, useSelector } from "react-redux";
import { addOriginDriver } from "../reducers/mapSliceDriver";
// import { OriginContext } from "../contexts/contexts";
// const { origin, dispatchOrigin } = useContext(OriginContext);

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, TextButton, MapComponentDriver} from "../components";







const DStartLocation = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [location, setLocation] = useState(false);

  const snapPoints = ['20%',"40%", '70%']; 
  useEffect(() => {
    // dispatch (
    //   addOrigin({latitude: "6.25555"})
    // )
    // setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    getLocation();
  }, []);



  const navigation = useNavigation();
  const textInput3 = useRef(4);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Geolocation Permission",
          message: "Can we access your location?",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      console.log("granted", granted);
      if (granted === "granted") {
        console.log("You can use Geolocation");
        return true;
      } else {
        console.log("You cannot use Geolocation");
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then((res) => {
      console.log("res is:", res);
      if (res) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setLocation(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
    console.log(location);
  };





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 3,
                  height : "100%",
                  backgroundColor: COLORS.background,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                 <MapComponentDriver></MapComponentDriver>
                 
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => navigation.goBack()}
                             
                              right={false}
                              icon={icons.left_arrow}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                            />

                 <BottomSheet
            // ref={sheetRef}
            snapPoints={snapPoints}
            // enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            backgroundStyle={{ borderRadius: 50}}
          
            >
              <BottomSheetView
                style={{
                  // borderRadius: 5,
                  // backgroundColor: COLORS.gray10
                }}>
                <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h2,
                  alignItems: 'center',
                  fontWeight: 'bold',
                  marginLeft: 20,
                  fontSize: 20
                }}
                >Choose a Start Location</Text>
                  <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h5,
                  alignItems: 'center',
                  marginLeft: 20,
                  fontSize: 12
                }}
                >Book on demand or pre-scheduled rides</Text>
                <View style={{
                  flexDirection: 'row'
                }}>
                  <GooglePlacesAutocomplete
                nearbyPlacesAPI="GooglePlacesSearch"
                placeholder="Enter Start Location"
                listViewDisplayed="auto"
                debounce={400}
                currentLocation={true}
                currentLocationLabel="Current Location"
                ref={textInput3}
                minLength={2}
                enablePoweredByContainer={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                  dispatch(
                    addOriginDriver({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      address: details.formatted_address,
                      name: details.name,
                    })
                  );

                  navigation.navigate("DestinationDriver", details);
                }}
                query={{
                  key: "AIzaSyA90qiuk4qHsW30DrC_8krLEhGBn3wWnFk",
                  language: "en",
                }}
                styles={{
                  textInputContainer: {
                    backgroundColor: COLORS.transparentWhite,
                    borderColor: COLORS.outLine,
                    borderRadius: 8,
                    borderWidth: 1,
                    width: "88%",
                    height: 50,
                    marginLeft: 17,
                    marginTop: SIZES.padding3,
                    padding: SIZES.padding2,
                  },
                  textInput: {
                    height: 38,
                    color: COLORS.gray70,
                    fontSize: 16,
                    marginTop: -10,
                    // maxWidth: "70%"
                  },
                  predefinedPlacesDescription: {
                    color: "#343a40",
                  },
                }}
              />

                            <IconButton
                                    icon={icons.Search}
                                    onPress={() => {navigation.navigate('DSetStartOnMap')}}
                                    iconStyle={{
                                      width: 25,
                                      height: 25,
                                      marginTop: 22,
                                      marginLeft: 5,
                                        tintColor: COLORS.black
                                    }}
                                ></IconButton>
                          </View>
              </BottomSheetView>
            </BottomSheet>
          
                           
            </View>

   
    )
}





  return (
    <View style={{ flex: 1 }}>
       <StatusBar
                        style="auto"
                        />
    
    {renderMap()}

  </View>
  )
}

export default DStartLocation;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginLeft: 17,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },




})