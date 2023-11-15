import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  // Section,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";
const { width, height } = Dimensions.get("window");
import { Drivercards } from "../Data/Data";
import { DriverDetails } from "../screens";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

const DriverCard = ({}) => {
  return (
    <ScrollView>
      {Drivercards.map((item, index) => {
        return (
            <TouchableOpacity onPress={() => {navigation.navigate('DriverDetails',item)}}>
            <View
              style={{
                height: 125,
                width: width * 0.9,
                marginLeft: 20,
                marginTop: 15,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: COLORS.black,
                flexDirection: "row",
              }}
              key={item.id}
            >
              <View style={{ flexDirection: "column" }}>
                <View style={styles.Circle}>
                  <Image
                    source={item.Image}
                    style={styles.profileimage}
                    resizeMode="center"
                  />
                </View>

                <View style={styles.Rating}>
                  <Image
                    source={require("../assets/images/Star.png")}
                    style={styles.profileimage1}
                    resizeMode="center"
                  />
                  <Text
                    style={{
                      marginTop: 22,
                      marginLeft: 7,
                      ...FONTS.h2,
                    }}
                  >
                    {item.ratings}
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.h2,
                    marginLeft: 60,
                    marginTop: 20,
                    color: COLORS.black,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 60,
                    marginTop: 5,
                  }}
                >
                  {item.vehicleType} * {item.condition}
                </Text>
                <Image
                  source={require("../assets/icons/Seats.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 56,
                    marginTop: 10,
                    // tintColor: COLORS.red1Font
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 100,
                    marginTop: -25,
                  }}
                >
                  {item.sheetcount} Seats Available
                </Text>
              </View>
              <View>
                <Image
                  source={require("../assets/icons/right_arrow.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 5,
                    marginTop: 45,
                    tintColor: COLORS.gray30,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
  profileimage: {
    width: 70,
    height: 70,
    borderRadius: 1300,
    // overflow: "hidden",
  },
  profileimage1: {
    width: 25,
    height: 25,
    borderRadius: 1300,
    marginTop: 23,
    marginLeft: 18,
    // overflow: "hidden",
  },
  Circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,

    // overflow: "hidden",
  },
  Rating: {
    flexDirection: "row",
    marginTop: -5,
    marginLeft: -5,
  },
});
