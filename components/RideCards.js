import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  // Section,
  FlatList,
  Dimensions,
} from "react-native";
import { DailyRideCards } from "../Data/Data";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, icons, images, dummyData } from "../constants";


const navigation = useNavigation();

const RideCards = ({}) => {
  return (
    <ScrollView>
      {DailyRideCards.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DailyRides',item);
            }}
          >
            <View
              style={{
                height: 130,
                width: width * 0.99,
                marginTop: 15,
                marginBottom: -40,
                borderRadius: 10,
                shadowColor: COLORS.black,
              }}
              key={item.id}
            >
              <View
               style={{
                width: width * 0.7,
              }}>
                <Image source={item.Image} />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default RideCards;
