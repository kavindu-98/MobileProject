import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../constants';

const PasswordIcon = ({icon, customContainerStyle, customLabelStyle, customIconStyle, onPress}) => {
  return (
    <TouchableOpacity
    style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...customContainerStyle
    }}
    onPress={onPress}
>
      <Image
    source={icon}
    style={{
        width: 20,
        height: 20,
        marginRight: 10,
        ...customIconStyle
    }}
  />
</TouchableOpacity>
  )
}

export default PasswordIcon;

const styles = StyleSheet.create({})