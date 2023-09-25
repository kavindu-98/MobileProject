import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

// screens
import {
  HomeScreen,
  PickupLocation,
  MyActivity,
  ProfileScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%",
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#ffff",
          height: "8%",
          display: "flex",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowOffset: {
            width: 0,
            height: -0.5,
          },
          shadowOpacity: 0.6,
          shadowRadius: 16.0,
          elevation: 1,
        },

        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.primary;

          switch (route.name) {
            case "Home1":
              return (
                <Image
                  source={focused ? icons.homeA : icons.homeN}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Location":
              return (
                <Image
                  source={icons.location}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "MyActivity":
              return (
                <Image
                  source={focused ? icons.ActiviesA : icons.ActiviesN}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Profile":
              return (
                <Image
                  source={focused ? icons.profileA : icons.profileN}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 27,
                    height: 27,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Location"
        component={PickupLocation}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}

        // tabBarStyle: {display: 'none'}
      />

      <Tab.Screen
        name="MyActivity"
        component={MyActivity}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
