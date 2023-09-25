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





const NoteToDriver = ({ route}) => {


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
                 flex: 0.2,
                  height : "100%",
                  backgroundColor: COLORS.gray10,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
            >
                     {/* header */}
                     <HeaderBar
                              // title={selectedPlace?.name}
                              leftOnPressed={navigation.goBack()}
                              right={false}
                              containerStyle={{
                                  position: 'absolute',
                                  top: SIZES.padding * 2,
                                  // height: "20%",
                                  // width: SIZES.width,
                                  // backgroundColor: COLORS.red1Font
                                 
                              }}
                            />
<View>
<MapComponent></MapComponent>
</View>
                
          
                           
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
                  fontSize: 23,
                  marginLeft: -190
                }}
                >Note to driver</Text>
                 <Text
                style={{
                  color: COLORS.gray40,
                  // fontWeight: 1,
                  ...FONTS.h3,
                  fontSize: 15,
                  marginLeft: -42
                }}
                >Let the driver know if you are coming or not</Text>
               
            
                

                

       
    

                 <View  style={styles.Buttoncontainer}>
                    
                        <Text style={styles.inputTitle}>Morning</Text>
                        <View style={styles.namecontainer}>
                                    <TextIconButton
                                label="Coming"
                                customContainerStyle={{
                                width: "43%",
                                height: 55,
                                backgroundColor: COLORS.gray20,
                                borderColor: COLORS.gray20,
                                borderWidth: 1,
                                borderRadius: SIZES.radius_btn4,
                                marginTop: SIZES.padding3,
                                margin: 5

                                }}
                                customLabelStyle={{
                                color: COLORS.gray30,
                                alignItems: 'center',
                                marginLeft: -15,
                                ...FONTS.h3,
                                
                                }}
                                // onPress={signup}
                            />
                         <TextIconButton
                                label="Not Coming"
                                customContainerStyle={{
                                width: "43%",
                                height: 55,
                                backgroundColor: COLORS.gray20,
                                borderColor: COLORS.gray20,
                                borderWidth: 1,
                                borderRadius: SIZES.radius_btn4,
                                marginTop: SIZES.padding3,
                                margin: 5
                                }}
                                customLabelStyle={{
                                color: COLORS.gray30,
                                alignItems: 'center',
                                marginLeft: -15,
                                ...FONTS.h3,
                                
                                }}
                                // onPress={signup}
                            />

                           
                            
                    </View>
                 
                     
                   </View>
                   <View  style={styles.Buttoncontainer}>
                    
                    <Text style={styles.inputTitle}>Evening</Text>
                            <View style={styles.namecontainer}>
                                        <TextIconButton
                                    label="Coming"
                                    customContainerStyle={{
                                    width: "43%",
                                    height: 55,
                                    backgroundColor: COLORS.gray20,
                                    borderColor: COLORS.gray20,
                                    borderWidth: 1,
                                    borderRadius: SIZES.radius_btn4,
                                    marginTop: SIZES.padding3,
                                    margin: 5

                                    }}
                                    customLabelStyle={{
                                    color: COLORS.gray30,
                                    alignItems: 'center',
                                    marginLeft: -15,
                                    ...FONTS.h3,
                                    
                                    }}
                                    // onPress={signup}
                                />
                            <TextIconButton
                                    label="Not Coming"
                                    customContainerStyle={{
                                    width: "43%",
                                    height: 55,
                                    backgroundColor: COLORS.gray20,
                                    borderColor: COLORS.gray20,
                                    borderWidth: 1,
                                    borderRadius: SIZES.radius_btn4,
                                    marginTop: SIZES.padding3,
                                    margin: 5
                                    }}
                                    customLabelStyle={{
                                    color: COLORS.gray30,
                                    alignItems: 'center',
                                    marginLeft: -15,
                                    ...FONTS.h3,
                                    
                                    }}
                                    // onPress={signup}
                                />

                            
                                
                        </View>
             
                 
               </View>

               <View style={styles.Buttoncontainer}>
                <View 
                 style={{
                    flexDirection: 'row',
                
                
                     // alignItems: 'center',
                     // justifyContent: 'center',
                   }}>
                <Text style={styles.inputTitle}>Note</Text>
                        <Text style={styles.inputTitle1}>(Optional)</Text>
                </View>
                        
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your note"
                            // autoFocus
                            // value={email}
                            // onChangeText={text => setEmail(text)}
                          />
                    </View>
      

                
                <TextIconButton
                      label="SEND"
                      customContainerStyle={{
                      width: "90%",
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
                      onPress={() => {navigation.navigate('SL')}}
                   />
                   
                   <TextIconButton
                      label="CANCEL"
                      customContainerStyle={{
                      width: "90%",
                      height: 55,
                      backgroundColor: COLORS.white,
                      borderColor: COLORS.gray30,
                      borderWidth: 1,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding3
                      }}
                      customLabelStyle={{
                      color: COLORS.red1Font,
                      alignItems: 'center',
                      marginLeft: -15,
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

export default NoteToDriver;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "90%",
    height: 75,
    marginLeft: 20,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2,
    marginBottom: -18

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
    
  },
  namecontainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    
},
inputTitle: {
    
    ...FONTS.h3,
    
    color: COLORS.black,
    marginTop: SIZES.padding3,
    marginLeft: 20
  },

  Buttoncontainer: {
    
    width: "100%",
    justifyContent: 'center'
},

inputTitle1:{
    marginTop: 12,
    marginLeft: 10
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