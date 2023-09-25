import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, StyleSheet,KeyboardAvoidingView, StatusBar,TouchableWithoutFeedback,Keyboard ,ScrollView, Animated} from 'react-native';
import { Button} from 'react-native-elements';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { TextIconButton} from "../components"
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import OTPInputView from '@twotalltotems/react-native-otp-input';


const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080/api/users/';

const DOTPScreen  = ({navigation}) => {

    const [name, setName] = useState('');
    const [NUM, setNUM] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState('');
    const [field, setField] = useState([]);
  

    const signup = () => {
        const payload = {
          name,
          email,
          password,
        };
    
        try {
          fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          navigation.navigate('Home');
          setName('');
          setPassword('');
          setConfirmPassword('');
          setEmail('');
          setPic('');
        } catch (error) {
          console.log(error);
        }
      };

      let AnimatedHeaderValue = new Animated.Value(0);
      const Header_Max_Height = 160;
      const Header_Min_Height = 40;
     
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
                    
            
          <Text style={styles.Title}>Verify phone number</Text>
       
         
      </Animated.View>
     
      <ScrollView
       scrollEventThrottle={16}
       onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        {useNativeDriver: false}
       )}
      
      >
      
      <View style={styles.footer}>
        
          <View  style={{ marginTop: SIZES.padding4, margin: SIZES.padding4}}>
                
                <View>
                      <View style={{
                        flexDirection: 'row'
                      }}>
                    
                          <Text style={styles.inputTitle}>Check your SMS messages. We’ve sent you the PIN at </Text>
                          <Text style={styles.inputTitle1}> +94768510781 </Text>
                      </View>
                     {/* <OTPInputView></OTPInputView> */}
                        <View style={{
                          flexDirection: 'row',
                          marginTop:30
                        }}>
                            <TextInput
                              style={styles.input}
                              placeholder=""
                              // autoFocus
                              value={NUM}
                              onChangeText={text => setNUM(text)}
                            />
                              <TextInput
                              style={styles.input}
                              placeholder=""
                              // autoFocus
                              value={NUM}
                              onChangeText={text => setNUM(text)}
                            />
                              <TextInput
                              style={styles.input}
                              placeholder=""
                              // autoFocus
                              value={NUM}
                              onChangeText={text => setNUM(text)}
                            />
                              <TextInput
                              style={styles.input}
                              placeholder=""
                              // autoFocus
                              value={NUM}
                              onChangeText={text => setNUM(text)}
                            />

                        </View>
                   


                  
             
              
               
          
               
                </View>

                    <TextIconButton
                      label="VERIFY"
                      customContainerStyle={{
                      width: "100%",
                      height: 55,
                      
                      borderRadius: SIZES.radius_btn4,
                      marginTop: 50
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('DHome')}}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>

    
  );
};

export default DOTPScreen;
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
    ...FONTS.largeTitle,
    fontWeight: 'bold',
    lineHeight: 40,
    marginTop: 80,
    width: 300,
    // height: 200,
    marginLeft: -34
    
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
    width: WINDOW_WIDTH*0.8,
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: SIZES.padding3
  },
   
  inputTitle1: {
    
    ...FONTS.h3,
    fontWeight: 'bold',
    color: COLORS.gray20,
    marginTop: 32,
    marginLeft: -250
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
    marginHorizontal:10,
    borderRadius: 8,
    borderWidth: 1,
    width: "20%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

  

});
