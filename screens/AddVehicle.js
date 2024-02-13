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
import {
  TextIconButton,
  PasswordIcon,
  IconButton,
  VehicleList,
} from '../components';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

// daily rides shortcuts edit screen

const AddVehicle = ({route}) => {
  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ['100%'];

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 40;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const navigation = useNavigation();

  function renderMap() {
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: COLORS.background,
        }}>
        {/* header */}
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
            },
          ]}>
          <TextIconButton
            icon={icons.left_arrow}
            customContainerStyle={{
              marginTop: SIZES.padding1,
              backgroundColor: COLORS.transparentWhite,
              width: 60,
              marginLeft: -4,
            }}
            customIconStyle={{
              height: 25,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />

          <Text style={styles.Title}>Vehicle List</Text>
        </Animated.View>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.gray10,
            }}>
            <VehicleList />
            <TextIconButton
              label="Add Vehicle"
              icon={icons.VehicleInfo}
              customContainerStyle={{
                width: '90%',
                height: 66,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius_btn3,
                marginTop: SIZES.padding3,
                justifyContent: 'flex-start',
              }}
              customLabelStyle={{
                color: COLORS.black,
                marginLeft: 30,
                ...FONTS.h3,
              }}
              customIconStyle={{
                width: 40,
                height: 40,
                marginLeft: 30,
              }}
              onPress={() => {
                navigation.navigate('VehicleDt1Screen');
              }}
            />
          </View>
        </ScrollView>
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

export default AddVehicle;

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
  header: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
  },
  Title: {
    // justifyContent: 'flex-end',
    justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 20,
  },
  button: {
    // marginLeft: 10,
    alignItems: 'flex-end',

    marginTop: 35,
  },
});
