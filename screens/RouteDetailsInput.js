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
  FlatList
  
} from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";
import SelectBox from 'react-native-multiple-select';
import {Picker} from '@react-native-picker/picker';
// import TagInput from 'react-native-tags-input';


const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080//api/users/login';



const RouteDetailsInput = ({ navigation }) => {


  const [email, setEmail] = useState();
  const [Condition, setCondition] = useState();

   const [selectedItem, setSelectedItem] = useState({});
   const [selectedGender, setSelectedGender] = useState({});

  
  //  const [tags, setTags] = useState([])

  //  const getTags = (tags) => {
  //    setTags(tags);
  //  }


    const [chips, setChips] = useState({
      tag: "",
      tagsArray: ["Yakkala", "Kalagedihena" , "Nittambuwa", "Veyangoda", "Dewalapola", "Minuwangoda", "White House", "Andiambalama"],
      
    });
  
    const updateTags = (state) => setChips({ ...chips, state });
const names = [
  {
    index: "1",
    name: "Yakkala"
  },
  {
    index: "2",
    name: "Kalagedihena"
  },
  {
    index: "3",
    name: "Nittambuwa"
  },
  {
    index: "4",
    name: "Veyangoda"
  },
  {
    index: "5",
    name: "Dewalapola"
  },
  {
    index: "6",
    name: "Minuwangoda"
  },
]


 

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
    }


    

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
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
                    
            
          <Text style={styles.Title}>Route Info</Text>
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
                            marginLeft: -130,
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
                 
                 
                    <Text style={styles.inputTitle}>ROUTE</Text>
                    <Picker
                              selectedValue={selectedItem}
                              style={{
                                borderWidth: 1,
                                // backgroundColor:COLORS.transparentBlack,
                                marginTop:8,
                                width: "100%"
                              }}
                              onValueChange={(itemValue, item) =>
                                setSelectedItem(itemValue)
                              }>
                              <Picker.Item label="Gampaha - Katunayake" value="Gampaha - Katunayake" />
                              <Picker.Item label="Negombo - Katunayake" value="Negombo - Katunayake" />
                              <Picker.Item label="Dehiwala - Katunayake" value="Dehiwala - Katunayake" />
                         
                            

                            </Picker>


                
                <Text style={styles.inputTitle}>MAIN STOPS</Text>
                  {/* <TextInput
                    style={styles.input}
                    placeholder="Enter your Route Permit Number"
                    // secureTextEntry
                    value={email}
                    onChangeText={text => setEmail(text)}
                  /> */}

     {/* <TagInput style={{
                  backgroundColor: COLORS.transparentWhite,
                  borderColor: COLORS.outLine,
                  borderRadius: 8,
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  marginTop: SIZES.padding3,
                  padding: SIZES.padding2
                
     }} 
     updateState={() => updateTags} tags={chips} placeholder='Enter main stops' /> */}

     <FlatList
     style={styles.listStyle}
     keyExtractor={(key) => {
      return key.index;
     }}
    //  horizontal
     data={names}
     renderItem={({ item }) => {
      console.log(item.name);
      return<Text style={styles.textStyle}>{item.name}</Text>
     }}>

     </FlatList>
                 
                </View>

                    <TextIconButton
                      label="DONE"
                      customContainerStyle={{
                      width: "100%",
                      height: 55,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: 120
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('DLogin')}}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default RouteDetailsInput;
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
    marginLeft: 60
    
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

 
  inputTitle: {
    
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
    textStyle: {
    fontSize: 15,
    padding: 30,
    backgroundColor: COLORS.gray30,
    margin: 10,
    color: COLORS.black,
    borderRadius: 20,
  },
  listStyle: {
    textAlign: 'center',
    margin: 10,
    padding:5,
   
  }

});
