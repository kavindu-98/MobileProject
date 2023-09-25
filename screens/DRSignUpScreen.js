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
import { Button, Icon } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";
import SelectBox from 'react-native-multiple-select';
import {Picker} from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


const Tab = createMaterialTopTabNavigator();

// const API_URL = 'http://192.168.1.107:8080//api/users/login';


// screen for driver signup


const DRSignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [Name1, setName1] = useState();
  const [Name2, setName2] = useState();
  const [Phone, setPhone] = useState();
  const [Did, setDid] = useState();
  const [NIC, setNIC] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
   const [selectedItem, setSelectedItem] = useState({});
   const [selectedGender, setSelectedGender] = useState({});


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


  const K_Option = [
    {
      item : '+94',
      id: 'sri',
    },
    {
      item : '+88',
      id: 'india',
    },
    {
      item : '+97',
      id: 'mal',
    },
    {
      item : '+99',
      id: 'ban',
    },
    {
      item : '+70',
      id: 'japan',
    },
    {
      item : '+60',
      id: 'usa',
    },
  ]

 

 

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
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
                        onPress={() => {navigation.navigate('SL')}}
                    /> 
                    
            
          <Text style={styles.Title}> Driver Sign up</Text>
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
                   <View style={styles.namecontainer}>
                    <View>
                        <Text style={styles.inputTitle}>FIRST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your First Name"
                            // autoFocus
                            value={Name1}
                            onChangeText={text => setName1(text)}
                          />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>LAST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your Last Name"
                            // autoFocus
                            value={Name2}
                            onChangeText={text => setName2(text)}
                          />
                    </View>
                     
                   </View>
                 
                    <Text style={styles.inputTitle}>EMAIL</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your Email"
                    // secureTextEntry
                    value={email}
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
                                value={Phone}
                                onChangeText={text => setPhone(text)}
                              />
                        </View>
                      
                </View>
                    <Text style={styles.inputTitle}>DRIVER ID</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Driver ID"
                    // secureTextEntry
                    value={Did}
                    onChangeText={text => setDid(text)}
                  />
                  
               
                 <View style={styles.namecontainer}>
                 
                       <View>
                          <Text style={styles.inputTitle}>NIC</Text>
                            <TextInput
                              style={styles.input}
                              placeholder="Enter your NIC Number"
                              // autoFocus
                              value={NIC}
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


                  <Text style={styles.inputTitle}>DRIVING LICENSE NUMBER</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Driver ID"
                    // secureTextEntry
                    value={Did}
                    onChangeText={text => setDid(text)}
                  />

<Text style={styles.inputTitle1}>Please Upload Driving license</Text>
                <View style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between'

                  
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
                  justifyContent: 'space-between'

                  
                }}>
                  
                  <Text style={styles.inputTitle2}>Front View</Text>    
                  <Text style={styles.inputTitle2}>Back View</Text> 

                </View>


                    <Text style={styles.inputTitle}>PASSWORD</Text>
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
                  />  
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
                      onPress={() => {navigation.navigate('VehicleDt1Screen')}}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default DRSignUpScreen;
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
    justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: -40
    
  },
  namecontainer: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between'
  },
  profileimage: {
    width: 130,
    height: 130,
    borderRadius: 15,
    overflow: "hidden",
  
  
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

 
  inputTitle: {
    
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3
  },
  inputSubTitle: {
    
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center'

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
