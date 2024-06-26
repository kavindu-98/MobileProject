import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {TextIconButton} from '../components';

// this screen select the role of Driver or Employee

const RoleSelect = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/background.png')}
          style={styles.ImageBackground}>
          <View style={styles.header1}>
            <Animatable.Image
              animation="bounceIn"
              // duration="1500"
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.footer} animation="fadeInUpBig">
        <View style={{flexDirection: 'row'}}>
          <View style={styles.button}>
            <TextIconButton
              label="Driver"
              customContainerStyle={{
                marginTop: SIZES.padding2,
                width: 164,
                height: 55,
                backgroundColor: COLORS.white,
                marginLeft: SIZES.padding,
                borderRadius: SIZES.radius_btn3,
              }}
              customLabelStyle={{
                color: COLORS.red1Font,
                marginLeft: -15,
              }}
              onPress={() => {
                navigation.navigate('DSL');
              }}
            />
          </View>
          <View style={styles.button}>
            <TextIconButton
              label="Employee"
              customContainerStyle={{
                marginTop: SIZES.padding2,
                width: 164,
                height: 55,
                backgroundColor: COLORS.red1Font,
                marginLeft: SIZES.padding1,
                borderRadius: SIZES.radius_btn3,
              }}
              customLabelStyle={{
                color: COLORS.white,
                marginLeft: -15,
              }}
              onPress={() => {
                navigation.navigate('SL');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoleSelect;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;
const d = Dimensions.get('screen');
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
    height: '87%',

    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header1: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: '13%',
    backgroundColor: '#BC0505',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginBottom: 480,

    // marginLeft: 133
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    width: d_image.width,
    height: '97.5%',
    marginTop: 250,
    // alignSelf: "flex-end",

    resizeMode: 'cover',
    marginBottom: -10,
  },
});
