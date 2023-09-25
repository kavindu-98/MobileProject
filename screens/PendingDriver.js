import {
  StyleSheet,
  Text,
  Modal,
  View,
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

// ride status and ride mappath

const PendingDriver = ({ route }) => {
  const Driver = route.params;

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCallVisible, setCallModalVisible] = useState(false);
  const [modalFinishRideVisible, setmodalFinishRideVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const snapPoints = ["5%" , "62%"];

  const navigation = useNavigation();
  const onPressHandler = () => {
    setIsClicked(true);
    setTimeout('',40000)
    setmodalFinishRideVisible(true)
  
  };

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
        <MapComponent></MapComponent>
        {/* header */}
        <HeaderBar
          // title={selectedPlace?.name}
          icon={icons.left_arrow}
          leftOnPressed={() => {
            navigation.navigate("DriverDetails");
          }}
          right={false}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            // height: "20%",
            // width: SIZES.width,
            backgroundColor: COLORS.transparentWhite,
          }}
        />
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
              {/* {Driver.name} */}
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={() => setCallModalVisible(true)}>
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
              <TouchableOpacity onPress={() => setModalVisible(true)}>
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
              {/* {Driver.vehicleNo} - Dehiwala */}
              NB 4752 - Dehiwala
            </Text>

            <TextIconButton
              label={isClicked ? "ACCEPTED" : "PENDING..."}
              customContainerStyle={{
                width: isClicked ? "60%" : "90%",
                height: 55,
                backgroundColor:isClicked ? COLORS.white : COLORS.redOpacity,
                borderWidth: isClicked ? 1 : null,
                borderColor: isClicked ? COLORS.red1Font : null,
                borderRadius: SIZES.radius_btn4,
                marginTop: SIZES.padding1,
              }}
              customLabelStyle={{
                color: isClicked ? COLORS.green : COLORS.white,
                alignItems: "center",
                marginLeft: -15,
                ...FONTS.h2,
              }}
              onPress={onPressHandler}
              // onPress={() => {
              //   navigation.navigate("AcceptDriver");
              // }}
            />
            {isClicked ? null  :(
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
                // onPress={onPressHandler}
                onPress={() => 
                  navigation.goBack()
                }
              />
            )}
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  }
// function for send note no driver
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
// function for call to driver
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
                  <Text style={styles.inputTitle1}>(0768510781)</Text>
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

  // model for changing the status of ride
  function FinishRide() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalFinishRideVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setmodalFinishRideVisible(!modalFinishRideVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalViewCall}>
        
        

              <View style={styles.Buttoncontainer}>
                <View
                  style={{
                    flexDirection: "row",

                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                >
                  <Text style={styles.inputTitle}>You have arrived your destination</Text>
                  <Text style={styles.inputTitle1}>Thank you !</Text>
                </View>
              </View>

            

              <TextIconButton
                label="FINISHED"
                customContainerStyle={{
                  width: "90%",
                  height: 55,
                  backgroundColor: COLORS.white,
                  borderColor: COLORS.green,
                  borderWidth: 1,
                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding3,
                }}
                customLabelStyle={{
                  color: COLORS.green,
                  alignItems: "center",
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={() => {navigation.navigate('RatingScreen')}}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  // opacity: modalVisible ? 0.2 : 1

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />

      {renderMap()}
      {NoteToDriver()}
      {CallToDriver()}
      {FinishRide()}

      {/* {AcceptDriver()} */}
      {/* {Finish()} */}
    </View>
  );
};

export default PendingDriver;

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
