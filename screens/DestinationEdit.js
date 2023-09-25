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
  useMemo,
} from "react";
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetSectionList,
} from "@gorhom/bottom-sheet";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
navigator.geolocation = require("react-native-geolocation-service");
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { rideData } from "../Data/Data";
import { IconButton } from "../components";
import {
  HeaderBar,
  TextIconButton,
  Rating,
  TextButton,
  MapComponent,
  SavedLocation,
} from "../components";

const DestinationEdit = ({ route }) => {
  const textInput2 = useRef(5);
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [destination1, setDestination] = useState(false);

  const { destination, dispatchDestination } = useContext(DestinationContext);
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const snapPoints1 = useMemo(() => ["5%", "70%"], []);
  const bottomsheet1 = useRef(1);
  const handleSheetChange1 = useCallback((index) => {}, []);

  useEffect(() => {
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
    });
  }, [destination]);

  

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 101;
  const Header_Min_Height = 40;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const navigation = useNavigation();
  const EditL = route.params;

  const renderFlatListItems = useCallback(
    ({ item }) => (
      <View style={styles.view10}>
        <View style={styles.view11}>
          <IconButton
            icon={icons.call}
            iconStyle={{
              // marginLeft: 35,
              // marginTop: 10,
              // borderRadius: 50,
  
              tintColor: COLORS.white,
            }}
          ></IconButton>
        </View>
        <View>
          <Text style={{fontSize:15, color: COLORS.gray10}}>{item.street}</Text>
          <Text style={{color: COLORS.gray40}}>{item.area}</Text>
        </View>
      </View>
    ),
    []
  );

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

          <Text style={styles.Title}>Edit {EditL.type} Location</Text>
        </Animated.View>

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
            onPress={(data, details = null) => {
              dispatchDestination({
                type: "ADD_DESTINATION",
                payload: {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  address: details.formatted_address,
                  name: details.name,
                },
              });

              setDestination(true);
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
                maxWidth: "90%",
              },
              predefinedPlacesDescription: {
                color: "#1faadb",
              },
            }}
          />
        </View>
        <BottomSheet
          ref={bottomsheet1}
          index={route.params.state}
          snapPoints={snapPoints1}
          onChange={handleSheetChange1}
        >
          <BottomSheetFlatList
            keyboardShouldPersistTaps="always"
            data={rideData}
            keyExtractor={(item) => item.id}
            renderItem={renderFlatListItems}
            contentContainerStyle={styles.contentContainer}
            ListHeaderComponent={
              <View style={styles.view10}>
                <View style={styles.view11}>
                  <IconButton
                    icon={icons.map}
                    iconStyle={{
                      // marginLeft: 35,
                      // marginTop: 10,
                      // borderRadius: 50,

                      tintColor: COLORS.white,
                    }}
                  ></IconButton>
                </View>
                <View>
                  <Text style={styles.text9}>Saved Places</Text>
                </View>
              </View>
            }
            ListFooterComponent={
              <View>
                <View style={styles.view10}>
                  <View style={styles.view11}>
                    <IconButton
                      icon={icons.map}
                      iconStyle={{
                        // marginLeft: 35,
                        // marginTop: 10,
                        // borderRadius: 50,

                        tintColor: COLORS.white,
                      }}
                    ></IconButton>
                  </View>
                  <View>
                    <Text style={styles.text9}>Set location on map</Text>
                  </View>
                </View>
                <View style={styles.view10}>
                  <View style={styles.view11}>
                    <IconButton
                      icon={icons.map}
                      iconStyle={{
                        // marginLeft: 35,
                        // marginTop: 10,
                        // borderRadius: 50,

                        tintColor: COLORS.white,
                      }}
                    ></IconButton>
                  </View>
                  <View>
                    <Text style={styles.text9}>Enter destination later</Text>
                  </View>
                </View>
              </View>
            }
          />
        </BottomSheet>
      </View>
    );
  }

  // function BodyPanel() {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,

  //         backgroundColor: COLORS.gray10,
  //         width: "100%",
  //       }}
  //     >
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate("");
  //         }}
  //       >
  //         <SavedLocation></SavedLocation>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigation.navigate("");
  //         }}
  //       >
  //         <SavedLocation></SavedLocation>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

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

export default DestinationEdit;



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
    marginLeft: 50,
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
    width: "90%",
    marginLeft: 20,
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray40,
    borderRadius: 6,
  },
  view10: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: COLORS.gray10,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  view11: {
    backgroundColor: COLORS.gray80,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },
  text9: { fontSize: 15, color: COLORS.gray10 },
});
