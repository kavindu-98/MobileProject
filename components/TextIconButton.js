import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS } from "../constants";

const TextIconButton = ({
  label,
  icon,
  customContainerStyle,
  customLabelStyle,
  customIconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 80,
        width: 130,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...customContainerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{
          width: 19,
          height: 15,
          ...customIconStyle,
        }}
      />
      <Text
        style={{
          marginRight: SIZES.base,
          ...FONTS.h2,
          fontWeight: "bold",
          ...customLabelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextIconButton;
