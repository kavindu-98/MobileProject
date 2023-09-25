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





const DFinishRide = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["100%"];   

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
                 flex: 2.5,
                  height : "100%",
                  backgroundColor: COLORS.background,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => navigation.goBack()}
                             
                              right={false}
                              icon={icons.left_arrow}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                            />

                 <MapComponent></MapComponent>
          
                           
            </View>

   
    )
}

function SlidingUpPanel() {
  return (
    
          <View
              style={{
               flex: 1,
           
                backgroundColor: COLORS.gray10,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}
          >
            <BottomSheet
            // ref={sheetRef}
            snapPoints={snapPoints}
            // enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
            backgroundStyle={{ borderRadius: 50}}
          
            >
              <BottomSheetView
                style={{
                  // borderRadius: 5,
                  // backgroundColor: COLORS.gray10
                  alignItems: 'center'
                }}>
                  <TextIconButton
                      label="FINISH RIDE"
                      customContainerStyle={{
                      width: "92%",
                      height: 55,
                      // marginLeft: 16,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding2
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('AcceptEmpReq')}}
                   />
                     <TextIconButton
                      label="CANCEL"
                      customContainerStyle={{
                      width: "92%",
                      height: 55,
                      backgroundColor: COLORS.white,
                      borderColor: COLORS.gray30,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3
                      }}
                      customLabelStyle={{
                      color: COLORS.red1Font,
                      ...FONTS.h2,
                      
                      }}
                      // onPress={signup}
                   />
                  
           
              </BottomSheetView>
            </BottomSheet>
           
        
          </View>


  )
}



  return (
    <View style={{ flex: 1 }}>
       <StatusBar
                        style="auto"
                        />
    
    {renderMap()}
    {SlidingUpPanel()}
  </View>
  )
}

export default DFinishRide;

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