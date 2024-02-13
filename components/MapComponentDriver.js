import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component, useEffect} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {MapStyle} from '../styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import { PickupLocation } from "../screens";
import {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';

// const data = useSelector((state) => state.mapData);

const MapComponentDriver = ({}) => {
  const {origin, destination} = useSelector(state => state.mapData);
  console.log('origin');
  console.log(origin);
  console.log('destination');
  console.log(destination);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBpPGnre332uNnud4OPqcSpvUSUTuAmWnc';

  return (
    <View>
      <MapView
        style={{
          width: '100%',
          height: '90%',
        }}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}>
        {origin.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: origin.latitude,
              longitude: origin.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/pickupmarker.png')}
              style={styles.markerOrigin2}
              resizeMode="cover"
            />
          </Marker>
        )}

        {/* {data.latitude != null && ( */}
        {/* <Marker
              coordinate={{showsUserLocation
                }}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../assets/images/pickupmarker.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </Marker> */}
        {/* )} */}
        {/* {.latitude !== null && */}
        {/* <MapViewDirections 
                          addOrigin={data}
                          destination={{latitude: 7.175549 ,longitude: 79.883291}}
                          // apikey={AIzaSyA90qiuk4qHsW30DrC_8krLEhGBn3wWnFk}
                          apikey={GOOGLE_MAPS_APIKEY}
                          strokeWidth={4}
                          strokeColor={COLORS.black}
                          // query={{
                          //   key: "AIzaSyA90qiuk4qHsW30DrC_8krLEhGBn3wWnFk",
                          //   language: "en",
                          // }}
                        /> */}
        {/* }  */}
      </MapView>
    </View>
  );
};

export default MapComponentDriver;

const styles = StyleSheet.create({
  markerDestination: {
    width: 30,
    height: 40,
  },
  markerOrigin2: {
    width: 42,
    height: 32,
  },
});
