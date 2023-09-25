import {
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { IconButton, TextIconButton } from "../components";

const DProfileScreen = () => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const snapPoints = ["50%"];

  const navigation = useNavigation();
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Greeting  */}
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              color: COLORS.black,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 130,
              fontWeight: "bold",

              ...FONTS.h5,
            }}
          >
            Driver Profile
          </Text>
        </View>

        {/* Notification */}

        <IconButton
          icon={icons.notifications}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        ></IconButton>
      </View>
    );
  }
  function LogSlideUp() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: 'center',
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <IconButton
                  icon={icons.Logout}
                  iconStyle={{
                    marginLeft: 5,
                    width: 40,
                    height: 40,
                    marginTop: 10,
                    borderRadius: 50,
                    // tintColor: COLORS.transparentWhite
                  }}
                ></IconButton>
                <View>
                  <Text style={{ ...FONTS.h2 }}>Logout</Text>
                  <Text style={{ ...FONTS.h3, marginTop: 10 }}>
                    Are you sure want to logout?
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: 'center',
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <TextIconButton
                  label="No"
                  customContainerStyle={{
                    width: "48%",
                    height: 55,
                    backgroundColor: COLORS.gray40,
                    borderWidth: 1,
                    borderColor: COLORS.gray40,
                    borderRadius: SIZES.radius_btn3,
                    marginTop: SIZES.padding1,
                  }}
                  customLabelStyle={{
                    color: COLORS.white,
                    alignItems: "center",
                    marginLeft: -15,
                    ...FONTS.h3,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <TextIconButton
                  label="Yes"
                  customContainerStyle={{
                    width: "48%",
                    height: 55,
                    backgroundColor: COLORS.red1Font,
                    borderWidth: 1,
                    borderColor: COLORS.red1Font,
                    borderRadius: SIZES.radius_btn3,
                    marginTop: SIZES.padding1,
                  }}
                  customLabelStyle={{
                    color: COLORS.white,
                    alignItems: "center",
                    marginLeft: -15,
                    ...FONTS.h3,
                  }}
                  onPress={() => {
                    navigation.navigate("");
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {/* header */}
        {renderHeader()}
        {LogSlideUp()}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titlebar}></View>
          <View style={{ alignSelf: "center", marginTop: 5  }}>
            <View style={styles.profileimage}>
              <Image
                source={require("../assets/images/Profile2.jpg")}
                style={styles.profileimage}
              />
            </View>
          </View>

          <View style={styles.proname}>
            <Text style={styles.nameTitle}>Lalith Perera</Text>
          </View>

          <View
            style={{
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <TextIconButton
              label="Profile info"
              icon={icons.ProfileE}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              onPress={() => {
                navigation.navigate("DRProfileInfo");
              }}
            />
            <TextIconButton
              label="Vehicle Info"
              icon={icons.VehicleInfo}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              // onPress={signup}
            />

            <TextIconButton
              label="My Daily Rides"
              icon={icons.DRide}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              onPress={() => {
                navigation.navigate("DRMyDailyRides");
              }}
            />

            <TextIconButton
              label="Settings"
              icon={icons.Settings}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              // onPress={signup}
            />

            <TextIconButton
              label="About us"
              icon={icons.About}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              // onPress={signup}
            />

            <TextIconButton
              label="Logout"
              icon={icons.Logout}
              customContainerStyle={{
                width: "90%",
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,

                // alignItems: 'center',
                justifyContent: "flex-start",
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                // alignItems: 'center',
                // justifyContent: 'flex-start',

                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              onPress={() => setModalVisible(true)}
            />
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginLeft: 30,
            }}
          >
            <Text style={styles.VersionTitle}>Made in</Text>

            <IconButton
              icon={icons.SL}
              iconStyle={{
                marginLeft: 5,
                marginTop: 10,
                borderRadius: 50,
                // tintColor: COLORS.transparentWhite
              }}
            ></IconButton>
            <Text style={styles.VersionTitle}> with</Text>

            <IconButton
              icon={icons.Love}
              iconStyle={{
                marginLeft: 5,
                marginTop: 10,
                borderRadius: 50,
                // tintColor: COLORS.transparentWhite
              }}
            ></IconButton>
          </View>
          <Text style={styles.Version1}>App version 1.0</Text>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DProfileScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  container: {
    backgroundColor: COLORS.background,
    height: "100%",
    flex: 1,
  },
  titlebar: {
    flexDirection: "row",
  },

  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: "hidden",
  },
  nameTitle: {
    color: COLORS.black,
    marginTop: 15,
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
  proname: {
    alignItems: "center",
  },
  nametag: {
    color: COLORS.dark_grey,
    marginTop: 3,
    fontSize: SIZES.h3,
  },
  prodes: {
    color: COLORS.grey,
    marginTop: -5,
    padding: 35,
    fontSize: SIZES.body5,
  },
  Version: {
    justifyContent: "flex-start",
  },
  VersionTitle: {
    color: COLORS.black,
    fontWeight: "bold",
    marginTop: 15,
    fontSize: SIZES.h3,
  },
  Version1: {
    marginLeft: 30,
    marginBottom: 30,
  },
  modelBackground: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    height: "40%",
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
