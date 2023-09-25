import {
  StyleSheet,
  Text,
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
  EmployeeCard,
} from "../components";
;

const AcceptEmpReq = ({ route }) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["60%","10%", "80%"];

  const navigation = useNavigation();

  function renderMap() {
    return (
      <View
        style={{
          flex: 3,
          height: "100%",
          backgroundColor: COLORS.gray10,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* </TouchableOpacity> */}

        <MapComponent></MapComponent>
        {/* header */}
        {/* <TouchableOpacity onPress={() => {navigation.navigate('SetDesM')}}> */}
        <HeaderBar
          // title={selectedPlace?.name}
          icon={icons.left_arrow}
          leftOnPressed={() => 
            navigation.goBack()
          }
          right={false}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            // height: "20%",
            // width: SIZES.width,
            // backgroundColor: COLORS.red1Font
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
            style={
              {
                // borderRadius: 5,
                // backgroundColor: COLORS.gray10
              }
            }
          >
            <Text
              style={{
                color: COLORS.black,
                // fontWeight: 1,
                ...FONTS.h2,
                fontWeight: "bold",
                alignItems: "center",
                marginLeft: 25,
                fontSize: 18,
              }}
            >
              ACCEPT EMPLOYEE REQUEST
            </Text>

            <EmployeeCard
              ImageUri={require("../assets/images/EProfile2.jpg")}
              Name="Nishi Silva"
              PhoneNo="071 2345678"
            ></EmployeeCard>
            <EmployeeCard
              ImageUri={require("../assets/images/EProfile1.jpg")}
              Name="Shani Fernando"
              PhoneNo="071 5454581"
            ></EmployeeCard>
            <EmployeeCard
              ImageUri={require("../assets/images/EProfile.jpg")}
              Name="Nishadi Adhikari"
              PhoneNo="071 2757584"
            ></EmployeeCard>

            {/* <TextInput
                            style={styles.input}
                            placeholder="Enter Destionation"
                            // autoFocus
                            // value={email}
                            // onChangeText={text => setEmail(text)}
                          /> */}
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {renderMap()}

    </View>
  );
};

export default AcceptEmpReq;

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
});
