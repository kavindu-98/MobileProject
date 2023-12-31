import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LoginComponent, SignupComponent } from "../components";
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
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon, IconButton } from "../components";
import { Picker } from "@react-native-picker/picker";
import { Employee } from "../Data/Data";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Tab = createMaterialTopTabNavigator();

// const API_URL = "http://192.168.1.107:8080//api/users/login";

// this screen for profile data updates and shows

const ProfileInfo = ({ navigation }) => {
 const [email, setEmail] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [NIC, setNIC] = useState();
  const [employeeId, setEid] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword1] = useState();
  const [password2, setPassword2] = useState();
   const [selectedItem, setSelectedItem] = useState({});
   const [selectedGender, setSelectedGender] = useState({});
   const [success,setSuccess] = useState({successMsg:''})
  const [error, setError] = useState({
    errorMsg:''
  });

  const Options = {
    title: "Select Image",
    type: "library",
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
    },
  };
  const openGallery = async () => {
    const images = await launchImageLibrary(Options);

    console.log(images.assets[0]);
    const formdata = new FormData();
    formdata.append("file", {
      uri: images.assets[0].uri,
      type: images.assets[0].type,
      name: images.assets[0].fileName,
    });
    let res = await fetch(URL, {
      method: "post",
      body: formdata,
      headers: {
        "Content-type": "multipart/form-data; ",
      },
    });
    let responseJson = await res.json();
    console.log(responseJson, "responseJson");
  };

  const K_Option = [
    {
      item: "+94",
      id: "sri",
    },
    {
      item: "+88",
      id: "india",
    },
    {
      item: "+97",
      id: "mal",
    },
    {
      item: "+99",
      id: "ban",
    },
    {
      item: "+70",
      id: "japan",
    },
    {
      item: "+60",
      id: "usa",
    },
  ];

  const register = async () => {
    const payload = {
      email,
      password,
    };

    try {
      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 50;

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
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
          <IconButton
            icon={icons.left_arrow}
            iconStyle={{
              tintColor: COLORS.black,
            }}
            onPress={()=> navigation.goBack()}
          ></IconButton>
          <Text
            style={{
              color: COLORS.black,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 90,
              fontWeight: "bold",

              ...FONTS.h5,
            }}
          >
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
            [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.footer}>
           <View style={{ alignSelf: "center", marginTop: 20 }}>
            <View style={styles.profileimage}>
              <Image
                source={require("../assets/images/EProfile.jpg")}
                style={styles.profileimage}
                resizeMode="center"
              />
            </View>
          </View>

          <View style={styles.proname}>
            <Text style={styles.nameTitle}>Nishadi Adhikari</Text>
          </View>

                 <View  style={{ marginTop: 20, margin: SIZES.padding4}}>
                
                <View>
                   <View style={styles.namecontainer}>
                    <View>
                        <Text style={styles.inputTitle}>FIRST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your First Name"
                            // autoFocus
                            value={Employee.Fname}
                            onChangeText={text => setFirstName(text)}
                          />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>LAST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your Last Name"
                            // autoFocus
                            value={Employee.Lname}
                            onChangeText={text => setLastName(text)}
                          />
                    </View>
                     
                   </View>
                 
                    <Text style={styles.inputTitle}>EMAIL</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your Email"
                    // secureTextEntry
                    value={Employee.email}
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
                                marginTop:8
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
                                value={Employee.phone}
                                onChangeText={text => setPhone(text)}
                              />
                        </View>
                      
                </View>
                    <Text style={styles.inputTitle}>EMPLOYEE ID</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Employee ID"
                    // secureTextEntry
                    value={Employee.EmployeeId}
                    onChangeText={text => setEid(text)}
                  />
                  
               
                 <View style={styles.namecontainer}>
                 
                       <View>
                          <Text style={styles.inputTitle}>NIC</Text>
                            <TextInput
                              style={styles.input}
                              placeholder="Enter your NIC Number"
                              // autoFocus
                              value={Employee.NIC}
                              onChangeText={text => setNIC(text)}
                            />
                      </View> 
                       <View style={{
                        marginRight:100
                       }} >
                          <Text style={styles.inputTitle}>GENDER</Text>

                          <Picker
                            selectedValue={selectedGender}
                            style={{
                              // borderWidth: 1,
                              // backgroundColor:COLORS.transparentBlack,
                              marginTop:8,
                              marginRight:-100
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

                    <Text style={styles.inputTitle}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={Employee.Password}
                    onChangeText={text => setPassword1(text)}
                  />
                        <Text style={styles.inputTitle}>CONFIRM PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Re-enter password"
                    secureTextEntry
                    value={password2}
                    onChangeText={text => setPassword2(text)}
                  />
                  
                  
                </View>
                {error.errorMsg !== '' && <Text style={styles.error}>{error.errorMsg}</Text>}
      {success.successMsg !== '' && <Text style={styles.success}>{success.successMsg}</Text>}

                    <TextIconButton
                      label="SAVE INFORMATION"
                      customContainerStyle={{
                      width: "100%",
                      height: 55,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding1
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('')}}
                   />
  

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
    flexDirection: "row",
  },
  footer: {
    // flex: 1,
    // height: "70%",
    backgroundColor: "#fff",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  proname: {
    alignItems: "center",
  },
  Title: {
    justifyContent: "flex-end",
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: -40,
  },
  nameTitle: {
    color: COLORS.black,
    marginTop: 15,
    fontSize: SIZES.h3,
    fontWeight: "bold",
  },
  namecontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
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
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    // marginLeft: 10,
    alignItems: "flex-end",
    marginLeft: 130,
    marginTop: 30,
  },

  inputTitle: {
    ...FONTS.h3,
    fontWeight: "bold",
    marginTop: SIZES.padding3,
  },
  inputSubTitle: {
    ...FONTS.h4,
    fontWeight: "bold",
    marginTop: SIZES.padding3,
    textAlign: "center",
  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    color: COLORS.black,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2,
  },
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: "hidden",
  },
});
