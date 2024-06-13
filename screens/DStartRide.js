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
} from 'react-native';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {Header, Icon, ListItem, SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import firebase from '@react-native-firebase/app';
import {useDispatch, useSelector} from 'react-redux';

import {FIREBASE_APP, database} from '../firebase';
import {ref, set} from 'firebase/database';

import {IconButton} from '../components';
import {
  HeaderBar,
  TextIconButton,
  Rating,
  TextButton,
  MapComponentDriver,
} from '../components';

const DStartRide = ({route}) => {
  const {Dorigin, Ddestination} = useSelector(state => state.DmapData);
  const [driverDetails, setDriverDetails] = useState({});

  const {vehicle} = useSelector(state => state.SelectVehicle);

  useEffect(() => {
    console.log('details: ', driverDetails);
    // if (Array.isArray(vehicle)) {
    //   // console.log('details: ', driver);
    setDriverDetails(vehicle);
    //   console.log('details: ', driverDetails);
    // }
  }, []);

  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['23%'];

  const navigation = useNavigation();

  const StartRide = async () => {
    set(ref(database, 'routes/', vehicle.DriverID), {
      vehicleID: vehicle._id,
      driverID: vehicle.DriverID,
      origin: Dorigin,
      destination: Ddestination,
      vehicleNo: vehicle.VehicleNo,
    })
      .then(() => {
        alert('Route added successfully!');
        navigation.navigate('AcceptEmpReq');
      })
      .catch(error => {
        console.error('Error adding Route: ', error);
        alert('Failed to add Route. Please try again.');
      });
  };

  function renderMap() {
    return (
      <View
        style={{
          flex: 3,
          height: '100%',
          backgroundColor: COLORS.background,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <MapComponentDriver></MapComponentDriver>
        {/* header */}
        <HeaderBar
          // title={selectedPlace?.name}
          icon={icons.left_arrow}
          leftOnPressed={() => navigation.goBack()}
          right={false}
          containerStyle={{
            position: 'absolute',
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
          backgroundStyle={{borderRadius: 50}}>
          <BottomSheetView
            style={{
              // borderRadius: 5,
              // backgroundColor: COLORS.gray10
              alignItems: 'center',
            }}>
            <TextIconButton
              label="START RIDE"
              customContainerStyle={{
                width: '92%',
                height: 55,
                // marginLeft: 16,
                borderRadius: SIZES.radius_btn4,
                marginTop: SIZES.padding2,
              }}
              customLabelStyle={{
                color: COLORS.white,
                alignItems: 'center',
                ...FONTS.h2,
              }}
              onPress={StartRide}
            />
            <TextIconButton
              label="CANCEL"
              customContainerStyle={{
                width: '92%',
                height: 55,
                backgroundColor: COLORS.white,
                borderColor: COLORS.gray30,
                borderWidth: 1,
                borderRadius: SIZES.radius_btn4,
                marginTop: SIZES.padding3,
              }}
              customLabelStyle={{
                color: COLORS.red1Font,
                alignItems: 'center',
                ...FONTS.h2,
              }}
              onPress={() => navigation.goBack()}
            />
          </BottomSheetView>
        </BottomSheet>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar style="auto" />

      {renderMap()}
    </View>
  );
};

export default DStartRide;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: '85%',
    height: 50,
    marginLeft: 17,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2,
  },
});
