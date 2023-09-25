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

import {
  HeaderBar,
  IconButton,
  TextIconButton,
  Rating,
  TextButton,
  MapComponent,
  DriverCard,
} from "../components";

import * as Animatable from "react-native-animatable";

import { ImageBackground } from "react-native";
import HomeScreen from "./HomeScreen";

import { Employee, EmployeeShortCuts } from "../Data/Data";

const DRDailyRides = ({ route }) => {
  const navigation = useNavigation();
  const daily = route.params;

  function renderContainer() {
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
          icon={icons.close}
          leftOnPressed={() => {
            navigation.goBack();
          }}
          iconStyle3={{
            tintColor: COLORS.white,
          }}
          right={false}
          title="Daily Rides"
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

        <View
          style={{
            //  flex: 1,
            width: "100%",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          {Employee.map((item, index) => {
            return (
              <View style={styles.Card}>
                <View
                  style={{
                    marginTop: 18,
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: 'center',
                  }}
                >
                  <View style={styles.Circle}>
                    <Image
                      source={item.Image}
                      style={styles.profileimage}
                      resizeMode="center"
                    />
                  </View>

                  <Text
                    style={{
                      color: COLORS.black,
                      fontWeight: "bold",
                      ...FONTS.h3,
                      fontSize: 18,
                      marginTop: 5,
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      color: COLORS.black,
                      // fontWeight: 1,
                      ...FONTS.h3,
                      fontSize: 12,
                    }}
                  >
                    {item.EmployeeId}
                  </Text>
                </View>
              </View>
            );
          })}

          <View style={styles.Card2}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/images/DayIcon.png")}
                  style={{
                    width: 45,
                    height: 45,
                  }}
                  resizeMode="center"
                />
                <Text
                  style={{
                    marginTop: 0,
                    marginLeft: 7,
                    ...FONTS.h2,
                  }}
                >
                  {daily.name}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {EmployeeShortCuts.map((Lcard, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("");
                      }}
                      key={Lcard.id}
                    >
                      <View
                        style={{
                          height: 80,
                          width: "85%",
                          marginTop: 15,
                          borderColor: COLORS.black,
                          borderWidth: 1,
                          borderRadius: 10,
                          shadowColor: COLORS.black,
                          flexDirection: "row",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <View style={{}}>
                          <Image
                            source={Lcard.Image}
                            style={{
                              width: 50,
                              height: 50,
                              // marginTop: 30
                            }}
                            resizeMode="center"
                          />
                        </View>

                        <View>
                          <Text
                            style={{
                              ...FONTS.h3,
                              marginLeft: 10,
                              marginTop: 5,
                              color: COLORS.black,
                            }}
                          >
                            {Lcard.type}
                          </Text>
                          <Text
                            style={{
                              ...FONTS.h3,
                              marginLeft: 10,
                              marginTop: 5,
                            }}
                          >
                            {Lcard.title}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('DestinationEdit',Lcard, {state:0});
                            }}
                          >
                            <Image
                              source={require("../assets/images/edit.png")}
                              resizeMode="contain"
                              style={{
                                width: 30,
                                height: 30,
                                marginLeft: 5,
                                tintColor: COLORS.red1Font,
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <TextIconButton
              label="SAVE"
              customContainerStyle={{
                width: "90%",
                height: 55,
                marginLeft: 16,

                borderRadius: SIZES.radius_btn4,
                marginTop: SIZES.padding1,
              }}
              customLabelStyle={{
                color: COLORS.white,
                alignItems: "center",
                marginLeft: -15,
                ...FONTS.h2,
              }}
              // onPress={HomeScreen}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {renderContainer()}
      {/* {SlidingUpPanel()} */}
    </View>
  );
};

export default DRDailyRides;

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

    // overflow: "hidden",
  },

  Card: {
    width: "75%",
    height: 200,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    marginTop: 100,
  },
  Card2: {
    width: "85%",
    height: 370,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    marginTop: 20,
    justifyContent: "center",
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
});
