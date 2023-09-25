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
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { HeaderBar, MapComponent, DriverCard } from "../components";

// this screen for select the driver according to the route

const SelectDriver = ({ dropLocation, pickupLocation}) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [Drivercards, setDrivercards] = useState([]);

  const snapPoints = ["60%"];

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
        {/* <TouchableOpacity onPress={() => {navigation.navigate('SetDesM')}}> */}

        {/* </TouchableOpacity> */}

        <MapComponent
            pickupLocation={pickupLocation}
            dropLocation={dropLocation}
       
          />
        <HeaderBar
          // title={selectedPlace?.name}
          icon={icons.left_arrow}
          leftOnPressed={() => {
            navigation.navigate("SetDesM");
          }}
          right={false}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            // height: "20%",
            // width: SIZES.width,
            backgroundColor: COLORS.transparentWhite,
          }}
        />
        <BottomSheet
          // ref={sheetRef}
          snapPoints={snapPoints}
          // enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
          backgroundStyle={{ borderRadius: 50 }}
        >
          <ScrollView>
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
                  marginLeft: 25,
                  fontSize: 20,
                }}
              >
                SELECT A DRIVER
              </Text>
              {/* <TouchableOpacity onPress={() => {navigation.navigate('DriverDetails')}}> */}
 {/* maping to the driverCard */}
              <DriverCard />
            </BottomSheetView>
          </ScrollView>
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

export default SelectDriver;

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
});
