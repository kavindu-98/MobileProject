import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component, useEffect, useRef} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {MapStyle} from '../styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import { PickupLocation } from "../screens";
import {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {RouteMaps} from '../Data/Data';

// const data = useSelector((state) => state.mapData);

const MapComponentRoute = ({pickupLocation, dropLocation}) => {
  // const data = useSelector(state => state.mapData);
  const route = RouteMaps[0];
  console.log('origin');
  console.log(route);
  // console.log('destination');
  // console.log(RouteMaps);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBpPGnre332uNnud4OPqcSpvUSUTuAmWnc';

  const mapRef = useRef();

  return (
    <View>
      <MapView
        ref={mapRef}
        style={{
          width: '100%',
          height: '90%',
        }}
        customMapStyle={MapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: pickupLocation.latitude,
          longitude: pickupLocation.longitude,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}>
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

        {dropLocation.latitude !== '' && (
          <Marker
            coordinate={{
              latitude: dropLocation.latitude,
              longitude: dropLocation.longitude,
            }}
            anchor={{x: 0.5, y: 0.5}}>
            <Image
              source={require('../assets/images/dropIcon.png')}
              style={styles.markerDestination}
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
            strokeColor={COLORS.black}
            optimizeWaypoints={true}
            onReady={result => {
              mapRef.current.fitToCoordinates,
                {
                  edgePadding: {
                    // right: 30,
                    // bottom: 300,
                    // left: 30,
                    // top: 100,
                  },
                };
            }}
          />
        )}
      </MapView>
    </View>
  );
};

export default MapComponentRoute;

const styles = StyleSheet.create({
  markerDestination: {
    width: 30,
    height: 40,
  },
  markerOrigin2: {
    width: 30,
    height: 40,
  },
  carsAround: {
    width: 60,
    height: 30,
  },
});
