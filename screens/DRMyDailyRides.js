import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, DRideCards, TextButton, MapComponent} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const DRMyDailyRides = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);




  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 


  const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 1,
                  height : "100%",
                  backgroundColor: COLORS.background,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <Animated.View style={
                            [styles.header,
                            {
                                height: animateHeaderHeight
                            }
                            ]}>
          
            <TextIconButton
                           
                           icon={icons.left_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding1,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -4
                          
                        }}
                        customIconStyle={{
                            height: 25
                        }}
                        onPress={() => {navigation.goBack()}}
                    /> 
                    
            
          <Text style={styles.Title}>Driver Daily Rides</Text>
 
         
      </Animated.View>
      <ScrollView>

      <View  style={{
                  alignItems: 'center',
                  // justifyContent: 'center',
                  backgroundColor: COLORS.gray10
                  
                }}>
         <DRideCards/>
      
        {/* <Cards customContainerStyle={{
          width: "90%",
          height: 130,
          marginLeft: -1,
          marginTop: 15,
          marginBottom: -40
         
         }} imageUri={require('../assets/images/NightCardLong.png')}>

        </Cards> */}
    

      </View>
      </ScrollView>
                 
            </View>

   
    )
}

// function Rides() {
//   return (
            
       
           
        
        


//   )
// }



  return (
    <View style={{ flex: 1 }}>
         <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {/* <ScrollView>
        {Rides()}
    </ScrollView> */}
  
  </View>
  )
}

export default DRMyDailyRides;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "85%",
    height: 50,
    marginLeft: 17,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

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
    ...FONTS.largeTitle,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: -34
    
    
  },
  button: {
    // marginLeft: 10,
    alignItems: 'flex-end', 
    
    marginTop: 35

},

//   header: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',

// },


// container: {
//   backgroundColor: COLORS.background,
//   height: "100%",
//   flex: 1
// },
// titlebar: {
//   flexDirection: 'row',

// },


// nameTitle : {
//    color: COLORS.black,
//    marginTop: 15,
//    fontSize: SIZES.h3,

   
// },
// proname : {
//   alignItems: 'center'
// },
// nametag : {
//   color: COLORS.dark_grey,
//   marginTop: 3,
//   fontSize: SIZES.h3,

  
// },
// prodes : {
//   color: COLORS.grey,
//   marginTop: -5,
//   padding: 35,
//   fontSize: SIZES.body5,

  
// },




})