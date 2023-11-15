import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  Button,
  // Section,
  FlatList,
} from "react-native";

import { DdummyData } from "../Data/Data";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
const { width, height } = Dimensions.get("window");

const DPhotoCard = ({ item }) => {
  return (
    <View style={{ width: width }}>
      <View style={{ flex: 1 }}>
        <Image
          source={item.Image}
          style={{
            flex: 1,
            width: width,
          }}
        />
      </View>
    </View>
  );
};

export default DPhotoCard;
