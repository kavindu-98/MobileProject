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
const [isClicked, setIsClicked] = useState(require("../assets/images/Estar.png"));

import {
  HeaderBar,
  IconButton,
  TextIconButton,
  Rating,
  TextButton,
  MapComponent,
  DriverCard,
} from "../components";


const onPressHandler = () => {
  setIsClicked(require("../assets/images/Star.png"));
};

//this screen for adding ratings for driver

const RatingScreen = ({ route }) => {
  const navigation = useNavigation();

  function renderMap() {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          flexDirection: "column",
          backgroundColor: COLORS.darkb_blue,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* header */}
        <HeaderBar
          // title={selectedPlace?.name}
          leftOnPressed={() => {
            navigation.navigate("Home1");
          }}
          icon={icons.close}
          iconStyle3={{
            tintColor: COLORS.white,
          }}
          right={false}
          title="Rating"
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            // height: "20%",
            // width: SIZES.width,
            // backgroundColor: COLORS.red1Font
          }}
          containerStyle2={{
            // height: "20%",
            // width: SIZES.width,
            backgroundColor: COLORS.transparentWhite,
          }}
        />
        <View style={styles.Card}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: 'center',
            }}
          >
            <View style={styles.Circle}>
              <Image
                source={require("../assets/images/Profile2.jpg")}
                style={styles.profileimage}
                resizeMode="center"
              />
            </View>

            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                ...FONTS.h1,
                fontSize: 23,
              }}
            >
              Lalith Perera
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
              }}
            >
               <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Estar.png")}
                style={styles.Star}
                resizeMode="center"
              />
            </View>
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h2,
                fontSize: 15,
              }}
            >
              NB3742 - Dehiwala
            </Text>

            <Image
              source={require("../assets/images/Line.png")}
              style={styles.line}
            />
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h2,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              HOW IS MY SERVICE?
            </Text>
            <Text
              style={{
                color: COLORS.gray30,
                // fontWeight: 1,
                ...FONTS.h2,
                textAlign: "center",
                lineHeight: 22,
                fontSize: 15,
              }}
            >
              Your feedback will help us imporve driving experience better.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
             
              <TouchableOpacity onPress={onPressHandler} > 
                <Image
                  source={isClicked}
                  style={styles.Star1}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressHandler}>
                <Image
                  source={isClicked}
                  style={styles.Star1}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressHandler}>
                <Image
                  source={isClicked}
                  style={styles.Star1}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressHandler}>
                <Image
                  source={isClicked}
                  style={styles.Star1}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressHandler}>
                <Image
                 source={isClicked}
                  style={styles.Star1}
                  resizeMode="center"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TextIconButton
            label="SUBMIT REVIEW"
            customContainerStyle={{
              width: "90%",
              height: 55,

              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding1,
            }}
            customLabelStyle={{
              color: COLORS.white,
              alignItems: "center",
              marginLeft: -15,
              ...FONTS.h2,
            }}
            onPress={() => {
              navigation.navigate("Home1");
            }}
          />
        </View>
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

export default RatingScreen;

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
  line: {
    width: 380,
    height: 26,

    // resizeMode: "cover",
  },
  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 1900,
    // overflow: "hidden",
  },
  Circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: 2,

    // overflow: "hidden",
  },

  Card: {
    width: 350,
    height: 530,
    borderRadius: 30,
    backgroundColor: COLORS.white,

    marginTop: 70,
    alignItems: "center",
    // justifyContent: 'center',

    // overflow: "hidden",
  },
  Star: {
    width: 24,
    height: 24,

    margin: 5,
  },
  Star1: {
    width: 44,
    height: 44,
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
