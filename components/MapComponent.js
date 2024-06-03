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

const MapComponent = ({}) => {
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

        {destination.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/dropIcon.png')}
              style={styles.markerDestination}
              resizeMode="cover"
            />
          </Marker>
        )}
        {origin.latitude !== '' && destination.latitude !== '' && (
          <MapViewDirections
            origin={{latitude: origin.latitude, longitude: origin.longitude}}
            destination={{
              latitude: destination.latitude,
              longitude: destination.longitude,
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

export default MapComponent;

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
