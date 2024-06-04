import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginComponent, SignupComponent} from '../components';
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
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {TextIconButton, PasswordIcon, IconButton} from '../components';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

const DRProfileInfo = ({navigation}) => {
  const [email, setEmail] = useState();
  const [Name1, setName1] = useState();
  const [Name2, setName2] = useState();
  const [Phone, setPhone] = useState();
  const [Did, setDid] = useState();
  const [DLN, setDLN] = useState();
  const [NIC, setNIC] = useState();
  // const [password1, setPassword1] = useState();
  // const [password2, setPassword2] = useState();
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedGender, setSelectedGender] = useState({});

  const [List, setList] = useState({});
  const [IsEdit, setIsEdit] = useState(false);

  const [DriverImg, setDriverImg] = useState();
  const [frontLicence, setFrontLicence] = useState();
  const [backLicence, setBackLicence] = useState();
  const [success, setSuccess] = useState({successMsg: ''});
  const [error, setError] = useState({
    errorMsg: '',
  });
  const [driverDetails, setDriverDetails] = useState({});
  const {isSuccess, isLoading, message, action} = useSelector(
    state => state.driverLogIn,
  );
  const {driver} = useSelector(state => state.driverLogIn);

  useEffect(() => {
    console.log(driver);
    setDriverDetails(driver);
  }, [driver]);

  // Validate the employee data in the front end
  const validate = () => {
    if (
      Name1 === '' ||
      Name2 === '' ||
      password1 === '' ||
      password2 === '' ||
      Did === '' ||
      NIC === ''
    ) {
      setError({...error, errorMsg: 'All Fields are required!'});
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (password1.length < 8) {
      setError({
        ...error,
        errorMsg: 'Password must be at least 8 characters long!',
      });
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (Phone.length <= 10) {
      setError({...error, errorMsg: 'Phone number is wrong!'});
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (password1 !== password2) {
      setError({...error, errorMsg: 'Passwords does not match!'});
      setSuccess({...success, successMsg: ''});
      return false;
    } else {
      setError({...error, errorMsg: ''});
      setSuccess({...success, successMsg: 'Successfully Account Created.'});
      return true;
    }
  };
  const dispatch = useDispatch();

  const handleEdit = user => {
    setIsEdit(true);
    console.log('hi Edit');
  };

  const handleSave = () => {
    setIsEdit(false);
    console.log('hi');
    dispatch(updateUser({...driverDetails, jwt: driver.userjwt}));
    // navigation.navigate('ProfileScreen');
  };

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
    if (name === 'DriverImg') {
      setDriverImg(object);
    }
    if (name === 'front') {
      setFrontLicence(object);
    } else {
      setBackLicence(object);
    }
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 50;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const getList = () => {
    axios({
      url: '',
      method: 'GET',
    }).then(res => {
      var response = res.data;
      setList(response.data);
    });
  };
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greeting  */}
        <View
          style={{
            flex: 1,
          }}>
          <IconButton
            icon={icons.left_arrow}
            iconStyle={{
              tintColor: COLORS.black,
            }}
            onPress={() => navigation.goBack()}></IconButton>
          <Text
            style={{
              color: COLORS.black,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 100,
              fontWeight: 'bold',

              ...FONTS.h5,
            }}>
            Driver Profile Info
          </Text>
        </View>

        {/* Notification */}
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {renderHeader()}

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
            {useNativeDriver: false},
          )}>
          <View style={styles.footer}>
            <View style={{alignSelf: 'center', marginTop: 20}}>
              <View style={styles.profileimage}>
                <Image
                  source={
                    DriverImg
                      ? {uri: DriverImg.uri}
                      : require('../assets/images/PhotoInput.png')
                  }
                  style={styles.profileimage}
                />
              </View>
              <IconButton
                icon={icons.add}
                onPress={() => openGallery('DriverImg')}
                iconStyle={{
                  marginLeft: 10,
                  marginTop: -38,
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  tintColor: COLORS.white,
                }}></IconButton>
            </View>

            <View style={styles.proname}>
              <Text style={styles.nameTitle}>
                {driverDetails.FirstName} {driverDetails.LastName}
              </Text>
            </View>

            <View style={{marginTop: 10, margin: SIZES.padding4}}>
              <View>
                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>FIRST NAME</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your First Name"
                      // autoFocus
                      value={driverDetails.FirstName}
                      editable={IsEdit}
                      onChangeText={text =>
                        setUserDetails(prevState => ({
                          ...prevState,
                          FirstName: text,
                        }))
                      }
                    />
                  </View>
                  <View>
                    <Text style={styles.inputTitle}>LAST NAME</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your Last Name"
                      // autoFocus
                      value={driverDetails.LastName}
                      editable={IsEdit}
                      onChangeText={text =>
                        setUserDetails(prevState => ({
                          ...prevState,
                          FirstName: text,
                        }))
                      }
                    />
                  </View>
                </View>

                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Create your Email"
                  // secureTextEntry
                  value={driverDetails.email}
                  onChangeText={text => setEmail(text)}
                />

                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>COUNTRY CODE</Text>

                    <Picker
                      selectedValue={selectedItem}
                      style={{
                        borderWidth: 1,
                        // backgroundColor:COLORS.transparentBlack,
                        marginTop: 8,
                      }}
                      onValueChange={(itemValue, item) =>
                        setSelectedItem(itemValue)
                      }>
                      <Picker.Item label="+94" value="+94" />
                      <Picker.Item label="+88" value="+88" />
                      <Picker.Item label="+97" value="+97" />
                      <Picker.Item label="+11" value="+11" />
                      <Picker.Item label="+12" value="+12" />
                    </Picker>
                  </View>
                  <View>
                    <Text style={styles.inputTitle}>CONTACT NO</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your Phone Number"
                      // autoFocus
                      value={driverDetails.phone}
                      onChangeText={text => setPhone(text)}
                    />
                  </View>
                </View>
                <Text style={styles.inputTitle}>DRIVER ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Driver ID"
                  // secureTextEntry
                  value={driverDetails.driverId}
                  onChangeText={text => setDid(text)}
                />

                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>NIC</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your NIC Number"
                      // autoFocus
                      value={driver.NIC}
                      onChangeText={text => setNIC(text)}
                    />
                  </View>
                  <View
                    style={{
                      marginRight: 100,
                    }}>
                    <Text style={styles.inputTitle}>GENDER</Text>

                    <Picker
                      selectedValue={selectedGender}
                      style={{
                        // borderWidth: 1,
                        // backgroundColor:COLORS.transparentBlack,
                        marginTop: 8,
                        marginRight: -100,
                      }}
                      onValueChange={(itemValue1, item) =>
                        setSelectedGender(itemValue1)
                      }>
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                      <Picker.Item label="nonbinary" value="nonbinary" />
                    </Picker>
                  </View>
                </View>

                <Text style={styles.inputTitle}>DRIVING LICENSE NUMBER</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Driver License Number"
                  // secureTextEntry
                  value={driver.licenceId}
                  onChangeText={text => setDLN(text)}
                />

                <Text style={styles.inputTitle1}>
                  Please Upload Driving license
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.profileimage}>
                    <TouchableOpacity>
                      <Image
                        source={
                          frontLicence
                            ? {uri: frontLicence.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                      <IconButton
                        icon={icons.add}
                        onPress={() => openGallery('front')}
                        iconStyle={{
                          marginLeft: 10,
                          marginTop: -38,
                          borderRadius: 50,
                          width: 40,
                          height: 40,
                          tintColor: COLORS.white,
                        }}></IconButton>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.profileimage}>
                    <TouchableOpacity>
                      <Image
                        source={
                          backLicence
                            ? {uri: backLicence.uri}
                            : require('../assets/images/PhotoInput.png')
                        }
                        style={styles.profileimage}
                      />
                      <IconButton
                        icon={icons.add}
                        onPress={() => openGallery('back')}
                        iconStyle={{
                          marginLeft: 10,
                          marginTop: -38,
                          borderRadius: 50,
                          width: 40,
                          height: 40,
                          tintColor: COLORS.white,
                        }}></IconButton>
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

                {/* <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Create your password"
                  secureTextEntry
                  value={password1}
                  onChangeText={text => setPassword1(text)}
                />
                <Text style={styles.inputTitle}>CONFIRM PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Re-enter password"
                  secureTextEntry
                  value={password2}
                  onChangeText={text => setPassword2(text)}
                /> */}
              </View>

              <TextIconButton
                label="SAVE INFORMATION"
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
                // onPress={handleUpdate}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DRProfileInfo;
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
  proname: {
    alignItems: 'center',
  },
  Title: {
    justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: -40,
  },
  nameTitle: {
    color: COLORS.black,
    marginTop: 15,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
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

  inputTitle1: {
    ...FONTS.h3,
    marginTop: SIZES.padding3,
  },
  inputTitle2: {
    ...FONTS.h4,
    marginTop: -10,
    marginHorizontal: 30,
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
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: 'hidden',
  },
});
