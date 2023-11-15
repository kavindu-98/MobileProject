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
  StyleSheet,
  Dimensions,
} from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import { SavedLocation1 } from "../Data/Data";

const { width, height } = Dimensions.get("window");
// const data = SavedLocation1;

const SavedLocation = ({}) => {
  return (
    <View
      style={{
        height: 60,
        width: width * 1,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        flexDirection: "row",
      }}
    >
      {SavedLocation1.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={item.Image}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                marginLeft: 56,
                // tintColor: COLORS.red1Font,
              }}
            />
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default SavedLocation;

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
