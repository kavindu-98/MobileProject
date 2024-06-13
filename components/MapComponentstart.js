import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {MapStyle} from '../styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import { PickupLocation } from "../screens";
import {useDispatch, useSelector} from 'react-redux';

// const data = useSelector((state) => state.mapData);

const MapComponentstart = ({pickupLocation, dropLocation}) => {
  const {origin, destination} = useSelector(state => state.mapData);
  // console.log('origin');
  const [travelTime, setTravelTime] = useState(null);
  console.log(origin);
  // console.log('destination');
  console.log(destination);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBpPGnre332uNnud4OPqcSpvUSUTuAmWnc';

  // Calculate the midpoint between origin and destination
  const midpoint = {
    latitude: (origin.latitude + destination.latitude) / 2,
    longitude: (origin.longitude + destination.longitude) / 2,
  };

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
            onReady={result => {
              setTravelTime(result.duration);
            }}
          />
        )}
        {travelTime && (
          <Marker coordinate={midpoint} anchor={{x: 0.5, y: 0.5}}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{`${Math.round(
                travelTime,
              )} min`}</Text>
            </View>
          </Marker>
        )}
        {pickupLocation.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: pickupLocation.latitude,
              longitude: pickupLocation.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/busIcon.png')}
              style={styles.carsAround}
              resizeMode="cover"
            />
          </Marker>
        )}
        {pickupLocation.latitude !== '' && dropLocation.latitude !== '' && (
          <MapViewDirections
            origin={{
              latitude: pickupLocation.latitude,
              longitude: pickupLocation.longitude,
            }}
            destination={{
              latitude: dropLocation.latitude,
              longitude: dropLocation.longitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={COLORS.blue}
            onReady={result => {
              setTravelTime(result.duration);
            }}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapComponentstart;

const styles = StyleSheet.create({
  markerDestination: {
    width: 30,
    height: 40,
  },
  markerOrigin2: {
    width: 42,
    height: 32,
  },
  timeContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  timeText: {
    fontSize: 12,
    color: 'black',
  },
  carsAround: {
    width: 60,
    height: 30,
  },
});
