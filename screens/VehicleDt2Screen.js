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
  Image
  
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";
import SelectBox from 'react-native-multiple-select';
import {Picker} from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CheckBox from 'react-native-check-box';

const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080//api/users/login';
const URL = 'https://media.istockphoto.com/id/691286862/vector/flat-man-driver-license-plastic-card-template-id-card-vector-illustration.jpg?s=612x612&w=0&k=20&c=c-tDqF5B4t2i_eoJXwWsUK05q8ORuLmRbeCa7weLtGc';



const VehicleDt2Screen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [Condition, setCondition] = useState();
  const [Name2, setName2] = useState();
  const [Phone, setPhone] = useState();
  const [Did, setDid] = useState();
  const [NIC, setNIC] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
   const [selectedItem, setSelectedItem] = useState({});
   const [selectedGender, setSelectedGender] = useState({});

   const [isChecked, setIsChecked] = useState(false);

   const Options ={
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    }
   }
   const openGallery= async () => {
      const images = await launchImageLibrary(Options);

      console.log(images.assets[0])
      const formdata = new FormData()
      formdata.append('file', {
        uri: images.assets[0].uri,
        type: images.assets[0].type,
        name: images.assets[0].fileName
      })
      let res = await fetch(
        URL,
        {
          method: 'post',
          body: formdata,
          headers: {
            'Content-type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      console.log(responseJson, "responseJson")
    

   }



 

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
  const Header_Max_Height = 90;
  const Header_Min_Height = 50;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

 




  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <View style={styles.container}>
                    <StatusBar
                        style="auto"
                        />
        
      <Animated.View style={
        [styles.header,
          {
            height: animateHeaderHeight
          }
        ]}>
          
            <TextIconButton
                           
                           icon={icons.left_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding2,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -6
                          
                        }}
                        customIconStyle={{
                            height: 30
                        }}
                        onPress={() => navigation.goBack()}
                    /> 
                    
            
          <Text style={styles.Title}> Vehicle Info</Text>
        <View style={styles.button}>

        <TextIconButton
                           label="Log in"
                           customContainerStyle={{
                            width: 130,
                            height: 35,
                            borderRadius: SIZES.radius_btn1,
                            // marginLeft: 15,
                            backgroundColor: COLORS.transparentWhite,
                            alignItems: 'flex-end',
                            // justifyContent: 'space-around'
                            
                        }}
                        customLabelStyle={{
                            color: COLORS.red1Font,
                            ...FONTS.h2,
                            alignItems: 'flex-end',
                            marginLeft: -110,
                            fontSize: 20
                        }}
                        onPress={() => {navigation.navigate('DLogin')}}
                    /> 
                   
        </View>
         
      </Animated.View>
     
      <ScrollView
       scrollEventThrottle={16}
       onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        {useNativeDriver: false}
       )}
      
      >
      
      <View style={styles.footer}>
        
          <View  style={{ marginTop: SIZES.padding5, margin: SIZES.padding4}}>
                
                <View>
                   
                    
                    <Text style={styles.inputTitle1}>Please Upload vehicle photos</Text>
                    <Text style={styles.inputTitle3}>Add minimum 4 photos</Text>
                <View style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                  marginHorizontal: 20

                  
                }}>
                  <View style={styles.profileimage}>
                  <TouchableOpacity onPress={openGallery}>
                      <Image source={require('../assets/images/PhotoInput.png')} style={styles.profileimage} 
                          />
                            </TouchableOpacity>
                      </View>
                      <View style={styles.profileimage}>
                      <TouchableOpacity onPress={openGallery}>
                      <Image source={require('../assets/images/PhotoInput.png')} style={styles.profileimage} 
                          />
                            </TouchableOpacity>
                      </View>

                </View>
                <View style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                  marginHorizontal: 20

                  
                }}>
                  <View style={styles.profileimage}>
                  <TouchableOpacity onPress={openGallery}>
                      <Image source={require('../assets/images/PhotoInput.png')} style={styles.profileimage} 
                          />
                            </TouchableOpacity>
                      </View>
                      <View style={styles.profileimage}>
                      <TouchableOpacity onPress={openGallery}>
                      <Image source={require('../assets/images/PhotoInput.png')} style={styles.profileimage} 
                          />
                            </TouchableOpacity>
                      </View>

                </View>
              
                        
                   
               
                     
                
                 
                    <Text style={styles.inputTitle}>ROUTE PERMIT NUMBER</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Route Permit Number"
                    // secureTextEntry
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />

<View style={styles.namecontainer}>
                      <View>
                            <Text style={styles.inputTitle}>NUMBER OF SEATS</Text>

                            <Picker
                              selectedValue={selectedItem}
                              style={{
                                borderWidth: 1,
                                // backgroundColor:COLORS.transparentBlack,
                                marginTop:8,
                                width: "120%"
                              }}
                              onValueChange={(itemValue, item) =>
                                setSelectedItem(itemValue)
                              }>
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
                              selectedValue={selectedItem}
                              style={{
                                // borderWidth: 1,
                                // backgroundColor:COLORS.transparentBlack,
                                marginTop:8,
                                width: "180%",
                                marginLeft: -60
                              
                              }}
                              onValueChange={(itemValue, item) =>
                                setSelectedItem(itemValue)
                              }>
                              <Picker.Item label="A/C" value="A/C" />
                              <Picker.Item label=" Non A/C" value=" Non A/C" />
                         
                            

                            </Picker>
                           
                        </View>
                      
                </View>
                
                <Text style={styles.inputTitle}>MORE FEATURES</Text>
                <View style={{ 
              justifyContent: "space-between" }}>
                <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="Wifi"
              rightTextStyle={{fontSize: 15, color: 'black'}}
              checkedCheckBoxColor="red"
              uncheckedCheckBoxColor="grey"
              style={{marginTop:10}}
              ></CheckBox>
               <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="DVD"
              rightTextStyle={{fontSize: 15, color: 'black'}}
              checkedCheckBoxColor="red"
              uncheckedCheckBoxColor="grey"
              style={{marginTop:10}}
              ></CheckBox>
                <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="MP3"
              rightTextStyle={{fontSize: 15, color: 'black'}}
              checkedCheckBoxColor="red"
              uncheckedCheckBoxColor="grey"
              style={{marginTop:10}}
              ></CheckBox>
                     <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="TV"
              rightTextStyle={{fontSize: 15, color: 'black'}}
              checkedCheckBoxColor="red"
              uncheckedCheckBoxColor="grey"
              style={{marginTop:10}}
              ></CheckBox>
                     <CheckBox
              isChecked={isChecked}
              onClick={() => setIsChecked(!isChecked)}
              rightText="USB"
              rightTextStyle={{fontSize: 15, color: 'black'}}
              checkedCheckBoxColor="red"
              uncheckedCheckBoxColor="grey"
              style={{marginTop:10}}
              ></CheckBox>

                </View>
            
     
                 
                </View>

                    <TextIconButton
                      label="CONTINUE"
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
                      onPress={() => {navigation.navigate('RouteDetailsInput')}}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default VehicleDt2Screen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
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
      paddingVertical: 30
  },
  Title: {
    justifyContent: 'center',
    color: COLORS.black,
    ...FONTS.h2,
    fontWeight: 'bold',
    marginTop: 45,
    marginLeft: 40
    
  },
  namecontainer: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between'
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
      marginTop: 30

  },
  inputTitle1: {
    
    ...FONTS.h3,
    marginTop: SIZES.padding3
  },
  inputTitle2: {
    
    ...FONTS.h4,
    marginTop: -10,
    marginHorizontal: 30  
  
  },
  inputTitle3: {
    
    ...FONTS.h4,
    marginTop: 5,
    color: COLORS.red1Font
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
    textAlign: 'center'

  },
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
  
  
  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

});
