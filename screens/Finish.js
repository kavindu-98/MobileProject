import { StyleSheet, Text, View,  StatusBar, TouchableOpacity, ScrollView, SafeAreaView, Image, Animated, BackHandler, TextInput} from 'react-native';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";


import { HeaderBar ,IconButton, TextIconButton, Rating, TextButton, MapComponent, DriverCard} from "../components";

import * as Animatable from 'react-native-animatable';

import { ImageBackground } from 'react-native';
import HomeScreen from './HomeScreen';





const Finish = ({ route}) => {


  const sheetRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["20%","40%","80%"];   

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
                 flex: 0.3,
                  height : "100%",
                  backgroundColor: COLORS.gray10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={() => {navigation.navigate('Home1')}}
                              right={false}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                            />
              
          
                           
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
                  justifyContent: 'center',
                  alignItems: 'center'
                  
                }}>
                <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h1,
                  fontSize: 23
                }}
                >Lalith Perera</Text>
                <View 
                style={{
                    flexDirection: 'row'
                }}
                >
                       <Image
                    source={require('../assets/icons/call.png')}
                    resizeMode="contain"
                    style={{
                        width: 50,
                        height: 50,
                        margin: 35,
                        marginTop: 50
                        // tintColor: COLORS.red1Font,
                        
                    }}
                />

                

        <View style={{ alignSelf: "center", marginTop: 20}}>
          <View style={styles.Circle}>
              <Image source={require('../assets/images/Profile2.jpg')} style={styles.profileimage} resizeMode="center"
              />
          </View>
        </View>
        
        <Image
                    source={require('../assets/icons/mesg.png')}
                    resizeMode="contain"
                    
                    style={{
                        width: 50,
                        height: 50,
                        margin: 35,
                        marginTop: 50
                        // tintColor: COLORS.red1Font,
                        
                    }}
                />

        </View>

        <View   style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10
                }}> 
                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />
                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />
                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />
                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />
                                <Image source={require('../assets/images/Star.png')} style={styles.Star} resizeMode="center"
                                />

        </View>
        <Text
                style={{
                  color: COLORS.black,
                  // fontWeight: 1,
                  ...FONTS.h2,
                  fontSize: 15
                }}
                >NB3742 - Dehiwala</Text>

                
                <TextIconButton
                      label="FINISHED"
                      customContainerStyle={{
                      width: "60%",
                      height: 55,
                      backgroundColor: COLORS.white,
                      borderWidth:1,
                      borderColor: COLORS.red1Font,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding1
                      }}
                      customLabelStyle={{
                      color: COLORS.green,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      onPress={() => {navigation.navigate('RatingScreen')}}
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

export default Finish;

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
  profileimage: {
    width: 120,
    height: 120,
    borderRadius: 1900,
    // overflow: "hidden",
    
  
  },
  Circle:{
    width: 120,
    height: 120,
    borderRadius: 100,
marginTop:2
   
    

    // overflow: "hidden",

  },
  Star:{
    width: 24,
    height: 24,

    margin: 5,
    
  }

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