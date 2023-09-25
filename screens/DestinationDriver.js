import {
  StyleSheet,
  Text,
  View,
  StatusBar,
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
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
navigator.geolocation = require("react-native-geolocation-service");
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "../components";
import {
  HeaderBar,
  TextIconButton,
  Rating,
  TextButton,
  MapComponent,
  SavedLocation,
} from "../components";
import { destination } from "../reducers/mapSlice";

// this screen for get the destination location of employee 

const DestinationDriver = ({ route }) => {
  const textInput2 = useRef(5);
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [destination1, setDestination] = useState(false);
  const dispatch = useDispatch();

  const pickupLocation = route.params;
  
  const [dropLocation , setDropLocation] = useState();
  const dispatchOrigin = useContext(OriginContext);
  console.log(pickupLocation);
  console.log(dispatchOrigin.latitude);

  // const { destination, dispatchDestination } = useContext(DestinationContext);

  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const snapPoints = ["100%"];

  useEffect(() => {
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [destination]);

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 180;
  const Header_Min_Height = 40;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const navigation = useNavigation();

  function renderMap() {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: COLORS.gray10,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* header */}
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
            },
          ]}
        >
          <TextIconButton
            icon={icons.close}
            customContainerStyle={{
              marginTop: SIZES.padding2,
              backgroundColor: COLORS.transparentWhite,
              width: 60,
              marginLeft: -4,
            }}
            customIconStyle={{
              height: 25,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />

          <Text style={styles.Title}>{pickupLocation.formatted_address}</Text>

          <View style={styles.button}>
            <IconButton
              icon={icons.map}
              onPress={() => {
                navigation.navigate("SetDesM");
              }}
              iconStyle={{
                marginLeft: 35,
                marginTop: 10,
                borderRadius: 50,
                // tintColor: COLORS.transparentWhite
              }}
            ></IconButton>
          </View>
          <View style={styles.searchBox}>
            <GooglePlacesAutocomplete
              nearbyPlacesAPI="GooglePlacesSearch"
              placeholder="Enter Destination"
              listViewDisplayed="auto"
              debounce={400}
              currentLocation={true}
              currentLocationLabel="Current Location"
              // ref={textInput1}
              minLength={2}
              enablePoweredByContainer={false}
              fetchDetails={true}
              onPress={( data, details = null) => {
                dispatch(
                  destination({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    address: details.formatted_address,
                    name: details.name,
                  })
                );
                // console.log(data.description);
                // console.log(details.formatted_address);

                navigation.navigate("SeleDriver", details);

                // console.log(details.geometry.location.lng);
            

                setDestination(true);
                setDropLocation(details)
                // console.log(dropLocation)
                // // dropLocation = details;
                // navigation.navigate(
                //   "SelectDriver",
                //   details,
                //   pickupLocation
                // );
              }}
              query={{
                key: "AIzaSyA90qiuk4qHsW30DrC_8krLEhGBn3wWnFk",
                language: "en",
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: COLORS.white,
                },
                textInput: {
                  height: 38,
                  color: COLORS.gray70,
                  fontSize: 16,
                  maxWidth: "70%",
                },
                predefinedPlacesDescription: {
                  color: "#1faadb",
                },
              }}
            />
          </View>
        </Animated.View>

        <View>
          <MapComponent
          />
        </View>
      </View>
    );
  }

  function BodyPanel() {
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: COLORS.gray10,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <SavedLocation></SavedLocation>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
        >
          <SavedLocation></SavedLocation>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {renderMap()}
      {/* <ScrollView>
    { BodyPanel()} 
    </ScrollView> */}
    </View>
  );
};

export default DestinationDriver;

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
  autoComplete: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  header: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
  },
  Title: {
    // justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h3,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // marginLeft: 10,
    alignItems: "flex-end",

    marginTop: 35,
  },
  searchBox: {
    top: 100,
    position: "absolute",
    flex: 1,
    width: "70%",
    marginLeft: 60,
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray40,
    borderRadius: 6,
  },

  //   header: {
  //     flex: 1,
  //     // justifyContent: 'center',
  //     // alignItems: 'center',

  // },

  // container: {
  //   backgroundColor: COLORS.background,
  //   height: "100%",
  //   flex: 1
  // },
  // titlebar: {
  //   flexDirection: 'row',

  // },

  // nameTitle : {
  //    color: COLORS.black,
  //    marginTop: 15,
  //    fontSize: SIZES.h3,

  // },
  // proname : {
  //   alignItems: 'center'
  // },
  // nametag : {
  //   color: COLORS.dark_grey,
  //   marginTop: 3,
  //   fontSize: SIZES.h3,

  // },
  // prodes : {
  //   color: COLORS.grey,
  //   marginTop: -5,
  //   padding: 35,
  //   fontSize: SIZES.body5,

  // },
});
