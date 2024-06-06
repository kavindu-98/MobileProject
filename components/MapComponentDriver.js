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
  const {Dorigin, Ddestination} = useSelector(state => state.DmapData);
  console.log('Dorigin');
  console.log(Dorigin);
  console.log('Ddestination');
  console.log(Ddestination);
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
          latitude: Dorigin.latitude,
          longitude: Dorigin.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}>
        {Dorigin.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: Dorigin.latitude,
              longitude: Dorigin.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/busIcon.png')}
              style={styles.carsAround}
              resizeMode="cover"
            />
          </Marker>
        )}

        {Ddestination.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: Ddestination.latitude,
              longitude: Ddestination.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/dropIcon.png')}
              style={styles.markerDestination}
              resizeMode="cover"
            />
          </Marker>
        )}
        {Dorigin.latitude !== '' && Ddestination.latitude !== '' && (
          <MapViewDirections
            Dorigin={{latitude: Dorigin.latitude, longitude: Dorigin.longitude}}
            Ddestination={{
              latitude: Ddestination.latitude,
              longitude: Ddestination.longitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={COLORS.black}
          />
        )}
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
  carsAround: {
    width: 60,
    height: 30,
  },
});
