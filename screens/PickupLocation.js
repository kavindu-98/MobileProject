import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Animated,
  BackHandler,
  TextInput,
} from "react-native";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BusAround } from "../Data/Data";
import { MapStyle } from "../styles";
import Geolocation from "react-native-geolocation-service";

import { IconButton } from "../components";
import { HeaderBar, MapComponent } from "../components";
import { Marker } from "react-native-maps";
import { OriginContext } from "../contexts/contexts";
import { useDispatch, useSelector } from "react-redux";
import { addOrigin } from "../reducers/mapSlice";

// this screen for get the pick location of employee

const PickupLocation = ({ route }) => {
  // location.coords.latitude = null;
  // location.coords.longitude = null;

  const data = useSelector((state) => state.mapData);
  console.log(data);
  const dispatch = useDispatch();

  const textInput1 = useRef(4);
  const [isOpen, setIsOpen] = useState(true);
  const [lating, setLating] = useState({});
  const [location, setLocation] = useState(false);
  const { origin, dispatchOrigin } = useContext(OriginContext);

  const snapPoints = ["20%", "40%", "70%"];
  useEffect(() => {
    // dispatch (
    //   addOrigin({latitude: "6.25555"})
    // )
    // setUserOrigin({ latitude: origin.latitude, longitude: origin.longitude });
    getLocation();
  }, [origin]);


// ask the permission of location from user 
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

  const _map = useRef(1);

  const navigation = useNavigation();


  // map view with nearest busses shown
  function renderMap() {
    return (
      <View
        style={{
          flex: 2,
          // height : "100%",
          backgroundColor: COLORS.transparentWhite,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <MapView
          style={{
            width: "100%",
            height: "85%",
          }}
          // ref ={_map}
          customMapStyle={MapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            ...BusAround[0],
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          {BusAround.map((item, index) => (
            <Marker coordinate={item} key={index.toString()}>
              <Image
                source={require("../assets/images/busIcon.png")}
                style={styles.carsAround}
                resizeMode="cover"
              />
            </Marker>
          ))}
          {/* {
          <Marker coordinate = {origin} anchor = {{x:0.5,y:0.5}} >
                            <Image 
                                source ={require('../assets/images/pickupmarker.png')}
                                style ={styles.markerOrigin2}
                                resizeMode ="cover"
                            />
                        </Marker>
          } */}
        </MapView>

        <HeaderBar
          // title={selectedPlace?.name}
          leftOnPressed={() => navigation.goBack()}
          right={false}
          icon={icons.left_arrow}
          containerStyle={{
            position: "absolute",
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
          backgroundStyle={{ borderRadius: 50 }}
        >
          <BottomSheetView
            style={
              {
                // borderRadius: 5,
                // backgroundColor: COLORS.gray10
              }
            }
          >
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h2,
                alignItems: "center",
                fontWeight: "bold",
                marginLeft: 20,
                fontSize: 20,
              }}
            >
              Choose a Pick-up Location
            </Text>
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h5,
                alignItems: "center",
                marginLeft: 20,
                fontSize: 12,
              }}
            >
              Book on demand or pre-scheduled rides
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {/* <TextInput
                            style={styles.input}
                            placeholder="Enter Destionation"
                            // autoFocus
                            // value={email}
                            // onChangeText={text => setEmail(text)}
                          /> */}

 {/* google autoplace suggesor */}
              <GooglePlacesAutocomplete
                nearbyPlacesAPI="GooglePlacesSearch"
                placeholder="Enter Pickup Location"
                listViewDisplayed="auto"
                debounce={400}
                currentLocation={true}
                currentLocationLabel="Current Location"
                ref={textInput1}
                minLength={2}
                enablePoweredByContainer={false}
                fetchDetails={true}
                onPress={( data, details = null) => {
                  dispatch(
                    addOrigin({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      address: details.formatted_address,
                      name: details.name,
                    })
                  );
                  // console.log(data.description);
                  // console.log(details.formatted_address);

                  navigation.navigate("Destination", details);

                  // console.log(details.geometry.location.lng);
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
                onPress={() => {
                  navigation.navigate("Destination");
                }}
                iconStyle={{
                  width: 25,
                  height: 25,
                  marginTop: 22,
                  marginLeft: 5,
                  tintColor: COLORS.black,
                }}
              ></IconButton>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {renderMap()}
      {/* {SlidingUpPanel()} */}
    </View>
  );
};

export default PickupLocation;

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
    padding: SIZES.padding2,
  },
  carsAround: {
    width: 60,
    height: 30,
  },
});
