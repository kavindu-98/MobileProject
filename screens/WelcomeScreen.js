import { 
    Text, 
    View,  
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image } from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { TextIconButton} from "../components"
import Feather from 'react-native-vector-icons/Feather'



const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.header}>
           <Animatable.Image
            animation="bounceIn"
            // duration="1500"
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
           />
       </View>
       <Animatable.View 
        style={styles.footer}
        animation="fadeInUpBig">
            <Text style={styles.title}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View 
            style={styles.button}
            >
                
            <TextIconButton
                           label="Get Started"
                           icon={icons.right_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding
                        }}
                        customLabelStyle={{
                            color: COLORS.white,
                            marginLeft: -150
                        }}
                        customIconStyle={{
                           justifyContent: 'flex-end',
                           marginLeft: 125
                           
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    /> 
                    
            </View>
       </Animatable.View>
    </View>
  )
}

export default WelcomeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.primary
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },


});