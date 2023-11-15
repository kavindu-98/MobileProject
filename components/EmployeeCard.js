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
import TextIconButton from "./TextIconButton";

import { COLORS, FONTS, SIZES, icons, images, dummyData } from "../constants";
const { width, height } = Dimensions.get("window");

const EmployeeCard = ({ ImageUri, Name, PhoneNo }) => {
  return (
    <View
      style={{
        height: 145,
        width: width * 0.9,
        marginLeft: 20,
        marginTop: 15,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: COLORS.black,
        flexDirection: "row",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <View style={styles.Circle}>
          <Image source={ImageUri} style={styles.profileimage} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/icons/call.png")}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              marginLeft: 15,
              marginTop: 20,

              // tintColor: COLORS.red1Font,
            }}
          />
          <Image
            source={require("../assets/icons/mesg.png")}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              marginLeft: 15,
              marginTop: 20,

              // tintColor: COLORS.red1Font,
            }}
          />
        </View>
      </View>
      <View style={{ marginLeft: -20 }}>
        <Text
          style={{
            ...FONTS.h2,
            marginLeft: 60,
            marginTop: 2,
            color: COLORS.black,
          }}
        >
          {Name}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            marginLeft: 60,
            marginTop: 5,
          }}
        >
          {PhoneNo}
        </Text>
        <Image
          source={require("../assets/images/Line1.png")}
          resizeMode="contain"
          style={{
            width: 230,
            height: 20,
            marginLeft: 56,

            tintColor: COLORS.gray20,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <Image
              source={require("../assets/icons/StartL.png")}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 56,

                // tintColor: COLORS.red1Font,
              }}
            />
            <Text
              style={{
                ...FONTS.h4,
                marginLeft: 84,
                marginTop: -21,
              }}
            >
              Peliyagoda
            </Text>
          </View>
          <View
            style={{
              marginLeft: -45,
            }}
          >
            <Image
              source={require("../assets/icons/Des.png")}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 56,

                // tintColor: COLORS.red1Font,
              }}
            />
            <Text
              style={{
                ...FONTS.h4,
                marginLeft: 84,
                marginTop: -21,
              }}
            >
              Katunayake
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextIconButton
            label="ACCEPT"
            customContainerStyle={{
              width: "32%",
              height: 25,
              backgroundColor: COLORS.red1Font,
              borderWidth: 1,
              borderColor: COLORS.red1Font,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding3,
              marginLeft: 50,
            }}
            customLabelStyle={{
              color: COLORS.white,
              alignItems: "center",
              marginLeft: -15,
              ...FONTS.h4,
            }}
            onPress={() => {
              navigation.navigate("");
            }}
          />
          <TextIconButton
            label="CANCEL"
            customContainerStyle={{
              width: "32%",
              height: 25,
              backgroundColor: COLORS.gray20,
              borderWidth: 1,
              borderColor: COLORS.gray20,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding3,
              marginLeft: 20,
            }}
            customLabelStyle={{
              color: COLORS.white,
              alignItems: "center",
              marginLeft: -15,
              ...FONTS.h4,
            }}
            onPress={() => {
              navigation.navigate("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  profileimage: {
    width: 70,
    height: 70,
    borderRadius: 1300,
    // overflow: "hidden",
    marginLeft: 10,
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
