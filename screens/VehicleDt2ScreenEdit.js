import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {TextIconButton, PasswordIcon} from '../components';
import SelectBox from 'react-native-multiple-select';
import {Picker} from '@react-native-picker/picker';
import {AddVehicle} from '../Actions/VehicleInfo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CheckBox from 'react-native-check-box';

const Tab = createMaterialTopTabNavigator();

const VehicleDt2ScreenEdit = ({route}) => {
  const navigation = useNavigation();
  const [PermitNo, setPermitNo] = useState();
  const [Conditon, setCondition] = useState();
  const [NoOfSeat, setNoOfSeat] = useState();
  const [isChecked, setIsChecked] = useState({
    wifi: false,
    dvd: false,
    mp3: false,
    tv: false,
    usb: false,
  });
  const formData2 = route.params;
  const [error, setError] = useState({
    errorMsg: '',
  });

  const [VehicleP1, setVehicleP1] = useState();
  const [VehicleP2, setVehicleP2] = useState();
  const [VehicleP3, setVehicleP3] = useState();
  const [VehicleP4, setVehicleP4] = useState();

  const {isSuccess, message, action} = useSelector(state => state.AddVehicle);

  const dispatch = useDispatch();
  const {driver} = useSelector(state => state.driverLogIn);
  const vehicleCreate = () => {
    const formData = new FormData();
    formData.append('DriverID', driver.driverId);
    formData.append('VNo', formData2._parts[0]);
    formData.append('VLNo', formData2._parts[1]);
    formData.append('VINo', formData2._parts[2]);
    formData.append('VType', formData2._parts[3]);
    formData.append('frontVLicence', formData2._parts[4]);
    formData.append('backVLicence', formData2._parts[5]);
    formData.append('frontVInsurance', formData2._parts[6]);
    formData.append('backVInsurance', formData2._parts[7]);
    formData.append('PermitNo', PermitNo);
    formData.append('Conditon', Conditon);
    formData.append('NoOfSeat', NoOfSeat);
    formData.append('VehicleP1', VehicleP1);
    formData.append('VehicleP2', VehicleP2);
    formData.append('VehicleP3', VehicleP3);
    formData.append('VehicleP4', VehicleP4);
    dispatch(AddVehicle(formData));
    navigation.navigate('DHome');
  };
  if (action === 'AddVehicle' && isSuccess) {
    console.log(message);
    dispatch(resetUserLoginStatus());
  }

  const Options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const openGallery = async name => {
    const images = await launchImageLibrary(Options);

    console.log(images.assets[0].base64);
    const object = {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    };
    if (name === 'VehicleP1') {
      setVehicleP1(object);
    }
    if (name === 'VehicleP2') {
      setVehicleP2(object);
    }
    if (name === 'VehicleP3') {
      setVehicleP3(object);
    }
    if (name === 'VehicleP4') {
      setVehicleP4(object);
    }
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 90;
  const Header_Min_Height = 50;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />

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
              marginTop: SIZES.padding2,
              backgroundColor: COLORS.transparentWhite,
              width: 60,
              marginLeft: -6,
            }}
            customIconStyle={{
              height: 30,
            }}
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.Title}> Vehicle Info</Text>
          <View style={styles.button}></View>
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          <View style={styles.footer}>
            <View style={{marginTop: SIZES.padding5, margin: SIZES.padding4}}>
              <View>
                <Text style={styles.inputTitle1}>
                  Please Upload vehicle photos
                </Text>
                <Text style={styles.inputTitle3}>Add minimum 4 photos</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  }}>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VehicleP1')}>
                      <Image
                        source={
                          VehicleP1
                            ? {uri: VehicleP1.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VehicleP2')}>
                      <Image
                        source={
                          VehicleP2
                            ? {uri: VehicleP2.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  }}>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VehicleP3')}>
                      <Image
                        source={
                          VehicleP3
                            ? {uri: VehicleP3.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VehicleP4')}>
                      <Image
                        source={
                          VehicleP4
                            ? {uri: VehicleP4.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.inputTitle}>ROUTE PERMIT NUMBER</Text>
                {/* <Text style={styles.inputTitle}>VNO{formData._parts[0]}</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Route Permit Number"
                  // secureTextEntry
                  value={PermitNo}
                  onChangeText={text => setPermitNo(text)}
                />

                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>NUMBER OF SEATS</Text>

                    <Picker
                      selectedValue={NoOfSeat}
                      style={{
                        borderWidth: 1,
                        // backgroundColor:COLORS.transparentBlack,
                        marginTop: 8,
                        width: '120%',
                      }}
                      onValueChange={(NoOfSeat, item) => setNoOfSeat(NoOfSeat)}>
                      <Picker.Item label="30 Seats" value="30 Seats" />
                      <Picker.Item label="20 Seats" value="20 Seats" />
                      <Picker.Item label="10 Seats" value="10 Seats" />
                      <Picker.Item label="40 Seats" value="40 Seats" />
                      <Picker.Item label="25 Seats" value="25 Seats" />
                    </Picker>
                  </View>
                  <View>
                    <Text style={styles.inputTitle}>CONDITION</Text>
                    <Picker
                      selectedValue={Conditon}
                      style={{
                        // borderWidth: 1,
                        // backgroundColor:COLORS.transparentBlack,
                        marginTop: 8,
                        width: '180%',
                        marginLeft: -60,
                      }}
                      onValueChange={(Conditon, item) =>
                        setCondition(Conditon)
                      }>
                      <Picker.Item label="A/C" value="A/C" />
                      <Picker.Item label=" Non A/C" value=" Non A/C" />
                    </Picker>
                  </View>
                </View>

                <Text style={styles.inputTitle}>MORE FEATURES</Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                  }}>
                  <CheckBox
                    isChecked={isChecked.wifi}
                    onClick={() =>
                      setIsChecked({...isChecked, wifi: !isChecked.wifi})
                    }
                    rightText="Wifi"
                    rightTextStyle={{
                      fontSize: 15,
                      color: isChecked.wifi ? 'red' : 'black',
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor="grey"
                    style={{marginTop: 10}}></CheckBox>
                  <CheckBox
                    isChecked={isChecked.dvd}
                    onClick={() =>
                      setIsChecked({...isChecked, dvd: !isChecked.dvd})
                    }
                    rightText="DVD"
                    rightTextStyle={{
                      fontSize: 15,
                      color: isChecked.dvd ? 'red' : 'black',
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor="grey"
                    style={{marginTop: 10}}></CheckBox>
                  <CheckBox
                    isChecked={isChecked.mp3}
                    onClick={() =>
                      setIsChecked({...isChecked, mp3: !isChecked.mp3})
                    }
                    rightText="MP3"
                    rightTextStyle={{
                      fontSize: 15,
                      color: isChecked.mp3 ? 'red' : 'black',
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor="grey"
                    style={{marginTop: 10}}></CheckBox>
                  <CheckBox
                    isChecked={isChecked.tv}
                    onClick={() =>
                      setIsChecked({...isChecked, tv: !isChecked.tv})
                    }
                    rightText="TV"
                    rightTextStyle={{
                      fontSize: 15,
                      color: isChecked.tv ? 'red' : 'black',
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor="grey"
                    style={{marginTop: 10}}></CheckBox>
                  <CheckBox
                    isChecked={isChecked.usb}
                    onClick={() =>
                      setIsChecked({...isChecked, usb: !isChecked.usb})
                    }
                    rightText="USB"
                    rightTextStyle={{
                      fontSize: 15,
                      color: isChecked.usb ? 'red' : 'black',
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor="grey"
                    style={{marginTop: 10}}></CheckBox>
                </View>
              </View>

              <TextIconButton
                label="CONTINUE"
                customContainerStyle={{
                  width: '100%',
                  height: 55,
                  borderRadius: SIZES.radius_btn4,
                  marginTop: SIZES.padding1,
                }}
                customLabelStyle={{
                  color: COLORS.white,
                  alignItems: 'center',
                  marginLeft: -15,
                  ...FONTS.h2,
                }}
                onPress={vehicleCreate}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VehicleDt2ScreenEdit;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
  },
  footer: {
    // flex: 1,
    // height: "70%",
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  Title: {
    justifyContent: 'center',
    color: COLORS.black,
    ...FONTS.h2,
    fontWeight: 'bold',
    marginTop: 45,
    marginLeft: 40,
  },
  namecontainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    // marginLeft: 10,
    alignItems: 'flex-end',
    marginLeft: 130,
    marginTop: 30,
  },
  inputTitle1: {
    ...FONTS.h3,
    marginTop: SIZES.padding3,
  },
  inputTitle2: {
    ...FONTS.h4,
    marginTop: -10,
    marginHorizontal: 30,
  },
  inputTitle3: {
    ...FONTS.h4,
    marginTop: 5,
    color: COLORS.red1Font,
    // marginHorizontal: 30
  },

  inputTitle: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
  },
  inputTitle4: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
  },

  inputSubTitle: {
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center',
  },
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2,
  },
});
