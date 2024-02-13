import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {TextIconButton, PasswordIcon} from '../components';
import {AddNewVehicle} from '../Actions/VehicleInfo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Tab = createMaterialTopTabNavigator();

const VehicleDt1ScreenEdit = ({navigation}) => {
  const [VNo, setVNo] = useState();
  const [VType, setVType] = useState();
  const [VLNo, setVLNo] = useState();
  const [VINo, setVINo] = useState();
  const [success, setSuccess] = useState({successMsg: ''});
  const [error, setError] = useState({
    errorMsg: '',
  });

  const [frontVLicence, setFrontVLicence] = useState();
  const [backVLicence, setBackVLicence] = useState();
  const [frontVInsurance, setFrontVInsurance] = useState();
  const [backVInsurance, setBackVInsurance] = useState();

  const {isError, isSuccess, isLoading, message, action} = useSelector(
    state => state.userLogIn,
  );

  // Validate the Vehicle information in the frontend
  const validate = () => {
    if (VNo === '' || VType === '' || VLNo === '' || VINo === '') {
      setError({...error, errorMsg: 'All Fields are required!'});
      setSuccess({...success, successMsg: ''});
      return false;
    }

    if (VLNo.length < 10) {
      setError({...error, errorMsg: 'Vehicle number is wrong!'});
      setSuccess({...success, successMsg: ''});
      return false;
    } else {
      setError({...error, errorMsg: ''});
      setSuccess({
        ...success,
        successMsg: 'Successfully added vehicle details.',
      });
      return true;
    }
  };
  const dispatch = useDispatch();
  const Handlevehicle = () => {
    console.log('hi');
    const formData = new FormData();
    formData.append('VNo', VNo);
    formData.append('VLNo', VLNo);
    formData.append('VINo', VINo);
    formData.append('VType', VType);
    formData.append('frontVLicence', frontVLicence);
    formData.append('backVLicence', backVLicence);
    formData.append('frontVInsurance', frontVInsurance);
    formData.append('backVInsurance', backVInsurance);

    console.log(formData);
    if (validate()) {
      dispatch(AddNewVehicle(formData));
      navigation.navigate('VehicleDt2ScreenEdit', formData);
    }
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
      includeBase64: true,
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
    if (name === 'VLfront') {
      setFrontVLicence(object);
    }
    if (name === 'VLback') {
      setBackVLicence(object);
    }
    if (name === 'VIfront') {
      setFrontVInsurance(object);
    }
    if (name === 'VIback') {
      setBackVInsurance(object);
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
              height: 40,
            }}
            onPress={() => navigation.goBack()}
          />

          <Text style={styles.Title}> Vehicle Info</Text>
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
                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>VEHICLE NUMBER</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your Vehicle No"
                      // autoFocus
                      value={VNo}
                      onChangeText={text => setVNo(text)}
                    />
                  </View>
                  <View>
                    <Text style={styles.inputTitle}>VEHICLE TYPE</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your Vehicle Type"
                      // autoFocus
                      value={VType}
                      onChangeText={text => setVType(text)}
                    />
                  </View>
                </View>

                <Text style={styles.inputTitle}>VEHICLE LICENSE NUMBER</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Vehicle License Number"
                  // secureTextEntry
                  value={VLNo}
                  onChangeText={text => setVLNo(text)}
                />

                <Text style={styles.inputTitle1}>
                  Please Upload vehicle license
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VLfront')}>
                      <Image
                        source={
                          frontVLicence
                            ? {uri: frontVLicence.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VLback')}>
                      <Image
                        source={
                          backVLicence
                            ? {uri: backVLicence.uri}
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
                  }}>
                  <Text style={styles.inputTitle2}>Front View</Text>
                  <Text style={styles.inputTitle2}>Back View</Text>
                </View>

                <Text style={styles.inputTitle}>VEHICLE INSURANCE NUMBER</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Vehicle Insurance Number"
                  // secureTextEntry
                  value={VINo}
                  onChangeText={text => setVINo(text)}
                />

                <Text style={styles.inputTitle1}>
                  Please Upload vehicle insurance
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VIfront')}>
                      <Image
                        source={
                          frontVInsurance
                            ? {uri: frontVInsurance.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileimage}>
                    <TouchableOpacity onPress={() => openGallery('VIback')}>
                      <Image
                        source={
                          backVInsurance
                            ? {uri: backVInsurance.uri}
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
                  }}>
                  <Text style={styles.inputTitle2}>Front View</Text>
                  <Text style={styles.inputTitle2}>Back View</Text>
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
                onPress={Handlevehicle}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VehicleDt1ScreenEdit;
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
    flex: 1,
    // height: "70%",
    backgroundColor: '#fff',
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
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: 'hidden',
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

  inputTitle: {
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
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
  inputSubTitle: {
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center',
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
