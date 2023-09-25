import { 
    Text, 
    View,  
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image, 
    ImageBackground} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { TextIconButton, IconButton} from "../components"
 





const GetStartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
      <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
             <IconButton
                    icon={icons.Ok}
                    iconStyle={{
                      width: 128,
                      height: 128,
                      marginTop: 10,
                        tintColor: COLORS.black
                    }}
                ></IconButton>

                <Text
                style={{
                  color: COLORS.black,
                  fontWeight: 'bold',
                  ...FONTS.h2,
                  fontSize: 26
                }}
                >You are ready to go !</Text>
                   <Text
                style={{
                  color: COLORS.gray60,
                  ...FONTS.h2,
                  width: SIZES.width*0.8,
                  textAlign:'center',
                  lineHeight: 22,
                  marginTop:12,
                  fontSize: 16
                }}
                >Thanks for taking your time to create
                account with us. Now this is the fun part,
                let’s explore the app.</Text>
            

        </View>

       <ImageBackground source={require('../assets/images/background.png')} style={styles.ImageBackground}>
     
       <TextIconButton
                      label="GET STARTED"
                      customContainerStyle={{
                      width: "55%",
                      height: 55,
                      backgroundColor: COLORS.darkb_blue,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: 100,
                      marginLeft: 85,
                      
                      }}
                      customLabelStyle={{
                      color: COLORS.red1Font,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h3,
                      
                      }}
                      
                      onPress={() => { console.log("worrking") 
                      navigation.navigate('Home')}}
                   />
           </ImageBackground>
        </View>

     
       <View style={styles.footer}
        animation="fadeInUpBig">
           
       </View>
       
    </View>
  )
}

export default GetStartScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;
const d = Dimensions.get("screen");
const d_image = d * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    
 
  },
  header: {
      width: '100%',
      height:'87%',
      marginTop:60
     
    //   justifyContent: 'center',
    //   alignItems: 'center'
     
  },
  footer: {
    width: '100%',
    height:'6%',
 
      backgroundColor: '#BC0505',
      
  },
  logo: {
      width: height_logo,
      height: height_logo,
      marginBottom: 480,
      marginLeft: 133
    
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
 
  button: {
      alignItems: 'center',
      
  },
  ImageBackground: {
    flex: 1,
    // justifyContent: 'center',
    width: d_image.width,
    height: "98.5%",
    marginTop: -70,
    // alignSelf: "flex-end",
   

    
    resizeMode: 'cover',
    marginBottom: -10
  }


});