import React, {useEffect, useState} from 'react';
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
import {Button, Icon} from 'react-native-elements';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {TextIconButton, PasswordIcon, IconButton} from '../components';
import {Picker} from '@react-native-picker/picker';
import {Employee} from '../Data/Data';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {signUpUser, updateUser} from '../Actions/userActions';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();

// this screen for profile data updates and shows

const ProfileInfo = ({navigation}) => {
  // const [password, setPassword1] = useState();
  // const [password2, setPassword2] = useState();
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedGender, setSelectedGender] = useState({});

  const [userDetails, setUserDetails] = useState({});

  const [success, setSuccess] = useState({successMsg: ''});
  const [error, setError] = useState({
    errorMsg: '',
  });

  const {isError, isSuccess, message, action} = useSelector(
    state => state.userLogIn,
  );

  const [UserImg, setUserImg] = useState();
  const [IsEdit, setIsEdit] = useState(false);

  const {user} = useSelector(state => state.userLogIn);

  useEffect(() => {
    setUserDetails(user);
  }, [user]);

  // Validate the employee data in the front end
  const validate = () => {
    if (
      FirstName === '' ||
      LastName === '' ||
      password === '' ||
      password2 === '' ||
      employeeId === '' ||
      NIC === ''
    ) {
      setError({...error, errorMsg: 'All Fields are required!'});
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (password.length < 8) {
      setError({
        ...error,
        errorMsg: 'Password must be at least 8 characters long!',
      });
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (phone.length < 9) {
      setError({...error, errorMsg: 'Phone number is wrong!'});
      setSuccess({...success, successMsg: ''});
      return false;
    }
    if (password !== password2) {
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
    dispatch(updateUser(userDetails));
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
    if (name === 'UserImg') {
      setUserImg(object);
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
              marginLeft: 90,
              fontWeight: 'bold',

              ...FONTS.h5,
            }}>
            Employee Profile Info
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
                    UserImg
                      ? {uri: UserImg.uri}
                      : require('../assets/images/PhotoInput.png')
                  }
                  style={styles.profileimage}
                />
              </View>
              <IconButton
                icon={icons.add}
                onPress={() => openGallery('UserImg')}
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
                {userDetails.FirstName} {userDetails.LastName}
              </Text>
            </View>

            <View style={{marginTop: 20, margin: SIZES.padding4}}>
              <View>
                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>FIRST NAME</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your First Name"
                      // autoFocus
                      value={userDetails.FirstName}
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
                      value={userDetails.LastName}
                      editable={IsEdit}
                      onChangeText={text =>
                        setUserDetails(prevState => ({
                          ...prevState,
                          LastName: text,
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
                  value={userDetails.email}
                  editable={IsEdit}
                  onChangeText={text =>
                    setUserDetails(prevState => ({
                      ...prevState,
                      email: text,
                    }))
                  }
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
                      value={userDetails.phone}
                      editable={IsEdit}
                      onChangeText={text =>
                        setUserDetails(prevState => ({
                          ...prevState,
                          phone: text,
                        }))
                      }
                    />
                  </View>
                </View>
                <Text style={styles.inputTitle}>EMPLOYEE ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Employee ID"
                  // secureTextEntry
                  value={userDetails.employeeId}
                  editable={false}
                  onChangeText={text =>
                    setUserDetails(prevState => ({
                      ...prevState,
                      employeeId: text,
                    }))
                  }
                />

                <View style={styles.namecontainer}>
                  <View>
                    <Text style={styles.inputTitle}>NIC</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your NIC Number"
                      // autoFocus
                      value={userDetails.NIC}
                      editable={IsEdit}
                      onChangeText={text =>
                        setUserDetails(prevState => ({
                          ...prevState,
                          NIC: text,
                        }))
                      }
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

                {/* <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Create your password"
                  secureTextEntry
                  value={user.Password}
                  editable={IsEdit}
                  onChangeText={text => setPassword1(text)}
                /> */}
                {/* <Text style={styles.inputTitle}>CONFIRM PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Re-enter password"
                  secureTextEntry
                  value={password2}
                  editable={IsEdit}
                  onChangeText={text => setPassword2(text)}
                /> */}
              </View>
              {error.errorMsg !== '' && (
                <Text style={styles.error}>{error.errorMsg}</Text>
              )}
              {success.successMsg !== '' && (
                <Text style={styles.success}>{success.successMsg}</Text>
              )}

              <View style={styles.buttonView}>
                <View style={styles.button}>
                  <TextIconButton
                    label="EDIT"
                    customContainerStyle={{
                      marginTop: SIZES.padding2,
                      width: 164,
                      height: 55,
                      backgroundColor: COLORS.red1Font,
                      marginLeft: SIZES.padding1,
                      borderRadius: SIZES.radius_btn3,
                    }}
                    customLabelStyle={{
                      color: COLORS.white,
                      marginLeft: -15,
                    }}
                    onPress={handleEdit}
                  />
                </View>
                <View style={styles.button}>
                  <TextIconButton
                    label="SAVE "
                    customContainerStyle={{
                      marginTop: SIZES.padding2,
                      width: 164,
                      height: 55,
                      backgroundColor: COLORS.red1Font,
                      marginLeft: SIZES.padding1,
                      borderRadius: SIZES.radius_btn3,
                    }}
                    customLabelStyle={{
                      color: COLORS.white,
                      marginLeft: -15,
                    }}
                    onPress={handleSave}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileInfo;
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
  buttonView: {
    width: '100%',
    flexDirection: 'row',
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
    marginLeft: -25,
    alignItems: 'center',
    // marginLeft: 130,
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
    color: COLORS.black,
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
