import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({
  icon,
  title,
  leftOnPressed,
  right,
  containerStyle,
  containerStyle2,
  iconStyle3,
  titleStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}
    >
      {/*  Back */}
      <View style={{ alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
            ...containerStyle2,
          }}
          onPress={leftOnPressed}
        >
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
              ...iconStyle3,
            }}
          />
        </TouchableOpacity>
      </View>
      {/* Title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3, ...titleStyle }}>
          {" "}
          {title}
        </Text>
      </View>

      {/* Settings */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: right ? COLORS.gray100 : null,
        }}
      >
        {right && (
          <Image
            source={icons.Search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
