import {
  StyleSheet,
  Text,
  View,
  Modal,
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

const AcceptDriver = ({ route }) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCallVisible, setCallModalVisible] = useState(false);

  const snapPoints = ["6%", "40%", "100%"];

const obj={name:'thari',age:5}
const obj2={...obj,gender:'m',number:'ddvd'}
  const navigation = useNavigation();

  function renderMap() {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: COLORS.gray10,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* header */}
        <MapComponent></MapComponent>
        <HeaderBar
          // title={selectedPlace?.name}
          leftOnPressed={() => {
            navigation.navigate("DriverDetails");
          }}
          right={false}
          icon={icons.left_arrow}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            // height: "20%",
            // width: SIZES.width,
            // backgroundColor: COLORS.red1Font
          }}
        />
      </View>
    );
  }

  function SlidingUpPanel() {
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: COLORS.gray10,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <BottomSheet
          // ref={sheetRef}
          snapPoints={snapPoints}
          // enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
          backgroundStyle={{ borderRadius: 50 }}
        >
          <BottomSheetView
            style={{
              // borderRadius: 5,
              // backgroundColor: COLORS.gray10
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h1,
                fontSize: 23,
              }}
            >
              Lalith Perera
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
               <TouchableOpacity   onPress={() => setCallModalVisible(true)}>
              <Image
                source={require("../assets/icons/call.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  margin: 35,
                  marginTop: 50,
                  // tintColor: COLORS.red1Font,
                }}
              />
              </TouchableOpacity>

              <View style={{ alignSelf: "center", marginTop: 20 }}>
                <View style={styles.Circle}>
                  <Image
                    source={require("../assets/images/Profile2.jpg")}
                    style={styles.profileimage}
                    resizeMode="center"
                  />
                </View>
              </View>
              <TouchableOpacity
               onPress={() => setModalVisible(true)}
              >
                <Image
                  source={require("../assets/icons/mesg.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    margin: 35,
                    marginTop: 50,
                    // tintColor: COLORS.red1Font,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
              <Image
                source={require("../assets/images/Star.png")}
                style={styles.Star}
                resizeMode="center"
              />
            </View>
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h2,
                fontSize: 15,
              }}
            >
              NB3742 - Dehiwala
            </Text>

            <TextIconButton
              label="ACCEPTED"
              customContainerStyle={{
                width: "60%",
                height: 55,
                backgroundColor: COLORS.white,
                borderWidth: 1,
                borderColor: COLORS.red1Font,
                borderRadius: SIZES.radius_btn4,
                marginTop: SIZES.padding1,
              }}
              customLabelStyle={{
                color: COLORS.green,
                alignItems: "center",
                marginLeft: -15,
                ...FONTS.h2,
              }}
              onPress={() => {
                navigation.navigate("Finish");
              }}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  }
  function NoteToDriver() {
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
              <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h1,
                  fontSize: 23,
                }}
              >
                Note to driver
              </Text>
              <Text
                style={{
                  color: COLORS.gray40,
                  // fontWeight: 1,
                  ...FONTS.h3,
                  fontSize: 15,
                }}
              >
                Let the driver know if you are coming or not
              </Text>

              <View style={styles.Buttoncontainer}>
                <Text style={styles.inputTitle}>Morning</Text>
                <View style={styles.namecontainer}>
                  <TextIconButton
                    label="Coming"
                    customContainerStyle={{
                      width: "43%",
                      height: 55,
                      backgroundColor: COLORS.gray20,
                      borderColor: COLORS.gray20,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3,
                      margin: 5,
                    }}
                    customLabelStyle={{
                      color: COLORS.gray30,
                      alignItems: "center",
                      marginLeft: -15,
                      ...FONTS.h3,
                    }}
                    // onPress={signup}
                  />
                  <TextIconButton
                    label="Not Coming"
                    customContainerStyle={{
                      width: "43%",
                      height: 55,
                      backgroundColor: COLORS.gray20,
                      borderColor: COLORS.gray20,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3,
                      margin: 5,
                    }}
                    customLabelStyle={{
                      color: COLORS.gray30,
                      alignItems: "center",
                      marginLeft: -15,
                      ...FONTS.h3,
                    }}
                    // onPress={signup}
                  />
                </View>
              </View>
              <View style={styles.Buttoncontainer}>
                <Text style={styles.inputTitle}>Evening</Text>
                <View style={styles.namecontainer}>
                  <TextIconButton
                    label="Coming"
                    customContainerStyle={{
                      width: "43%",
                      height: 55,
                      backgroundColor: COLORS.gray20,
                      borderColor: COLORS.gray20,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3,
                      margin: 5,
                    }}
                    customLabelStyle={{
                      color: COLORS.gray30,
                      alignItems: "center",
                      marginLeft: -15,
                      ...FONTS.h3,
                    }}
                    // onPress={signup}
                  />
                  <TextIconButton
                    label="Not Coming"
                    customContainerStyle={{
                      width: "43%",
                      height: 55,
                      backgroundColor: COLORS.gray20,
                      borderColor: COLORS.gray20,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3,
                      margin: 5,
                    }}
                    customLabelStyle={{
                      color: COLORS.gray30,
                      alignItems: "center",
                      marginLeft: -15,
                      ...FONTS.h3,
                    }}
                    // onPress={signup}
                  />
                </View>
              </View>

              <View style={styles.Buttoncontainer}>
                <View
                  style={{
                    flexDirection: "row",

                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >
                  <Text style={styles.inputTitle}>Note</Text>
                  <Text style={styles.inputTitle1}>(Optional)</Text>
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Enter your note"
                  // autoFocus
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                />
              </View>

              <TextIconButton
                label="SEND"
                customContainerStyle={{
                  width: "90%",
                  height: 55,

                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding1,
                }}
                customLabelStyle={{
                  color: COLORS.white,
                  alignItems: "center",
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={() => {
                  navigation.navigate("SL");
                }}
              />

              <TextIconButton
                label="CANCEL"
                customContainerStyle={{
                  width: "90%",
                  height: 55,
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.gray30,
                  borderWidth: 1,
                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding3,
                }}
                customLabelStyle={{
                  color: COLORS.red1Font,
                  alignItems: "center",
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function CallToDriver() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalCallVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setCallModalVisible(!modalCallVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalViewCall}>
              <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h1,
                  fontSize: 23,
                }}
              >
                Call to Driver
              </Text>
              <Text
                style={{
                  color: COLORS.gray40,
                  // fontWeight: 1,
                  ...FONTS.h3,
                  fontSize: 15,
                }}
              >
                Let make the call to driver
              </Text>

            

              <View style={styles.Buttoncontainer}>
                <View
                  style={{
                    flexDirection: "row",

                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >
                  <Text style={styles.inputTitle}>Make a Call for this</Text>
                  <Text style={styles.inputTitle1}>(076 8510781)</Text>
                </View>

              
              </View>

              <TextIconButton
                label="CALL"
                customContainerStyle={{
                  width: "90%",
                  height: 55,
                  backgroundColor: COLORS.green,

                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding1,
                }}
                customLabelStyle={{
                  color: COLORS.white,
                  alignItems: "center",
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={() => {
                  navigation.navigate("");
                }}
              />

              <TextIconButton
                label="CANCEL"
                customContainerStyle={{
                  width: "90%",
                  height: 55,
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.gray30,
                  borderWidth: 1,
                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding3,
                }}
                customLabelStyle={{
                  color: COLORS.red1Font,
                  alignItems: "center",
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={() => setCallModalVisible(!modalCallVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View style={{ flex: 1,
      }}>
      <StatusBar style="auto" />

      {renderMap()}
        {NoteToDriver()}
        {CallToDriver()}
      {SlidingUpPanel()}
    </View>
  );
};

export default AcceptDriver;

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
    marginTop: 2,

    // overflow: "hidden",
  },
  Star: {
    width: 24,
    height: 24,

    margin: 5,
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
    width: "90%",
    height: "90%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewCall: {
    width: "90%",
    height: "50%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  namecontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  inputTitle: {
    ...FONTS.h3,

    color: COLORS.black,
    marginTop: SIZES.padding3,
    marginLeft: 20,
  },

  Buttoncontainer: {
    width: "100%",
    justifyContent: "center",
  },

  inputTitle1: {
    marginTop: 12,
    marginLeft: 10,
  },

  
});
