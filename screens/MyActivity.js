import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";

import {
  IconButton,

} from "../components";
import { HeaderBar , TextIconButton, Rating, TextButton, MapComponent} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const MyActivity = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["100%"];   


  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

//   const [selectedPlace, setSelectedPlace] = React.useState(null)
//   const [selectedHotel, setSelectedHotel] = React.useState(null)
//   const [allowDragging, setAllowDragging] = React.useState(true)


//   const _draggedValue = React.useRef(new Animated.Value(0)).current;


// //   let _panel = React.useRef(null);

//   React.useEffect(() => {
//       let { selectedPlace } = route.params;
//       setSelectedPlace(selectedPlace) 
//       // Listener that will diasble panel dragging whenever the mapview is shown
//       _draggedValue.addListener((valueObj) => {
//           if (valueObj.value > SIZES.height) {
//               setAllowDragging(false)
//           }
//       })
//       return () => {
//           _draggedValue.removeAllListeners()
//       }
//   }, [])
  const navigation = useNavigation();





function renderMap() {
    return (
 
            <View
                style={{
                 flex: 3,
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
                        onPress={() => {navigation.navigate('')}}
                    /> 
                    
            
          <Text style={styles.Title}>My Activity</Text>
 
         
      </Animated.View>
      <View    style={{
                 flexDirection: 'row',
                 alignItems: 'center'
                }}>
      <TextIconButton
                      label="UPCOMING"
                      customContainerStyle={{
                      width: "33.3%",
                      height: 40,
                      backgroundColor: COLORS.white,
                      borderRadius: 0
                    
                      }}
                      customLabelStyle={{
                      color: COLORS.red1Font,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h3,
                      
                      }}
                      // onPress={signup}
                   />
                    <TextIconButton
                      label="COMPLETED"
                      customContainerStyle={{
                      width: "33.3%",
                      height: 40,
                      backgroundColor: COLORS.white,
                      borderRadius: 0
                    
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h3,
                      
                      }}
                      // onPress={signup}
                   />
                    <TextIconButton
                      label="CANCELED"
                      customContainerStyle={{
                      width: "33.3%",
                      height: 40,
                      backgroundColor: COLORS.white,
                      borderRadius: 0
                    
                      }}
                      customLabelStyle={{
                      color: COLORS.black,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h3,
                      
                      }}
                      // onPress={signup}
                   />
      </View>
                    <TextIconButton
                    //   label="UPCOMING"
                      customContainerStyle={{
                      width: "33.3%",
                      height: 5,
                      backgroundColor: COLORS.red1Font,
                      borderRadius: 20
                    
                      }}
                      customLabelStyle={{
                      color: COLORS.red1Font,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h3,
                      
                      }}
                      // onPress={signup}
                   />
              
           
                           
            </View>

   
    )
}

// function SlidingUpPanel() {
//   return (
    
//           <View
//               style={{
//                flex: 1,
           
//                 backgroundColor: COLORS.gray10,
//                 // alignItems: 'center',
//                 // justifyContent: 'center',
//               }}
//           >
          
           
        
//           </View>


//   )
// }



  return (
    <View style={{ flex: 1 }}>
         <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {/* {SlidingUpPanel()} */}
  </View>
  )
}

export default MyActivity;

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