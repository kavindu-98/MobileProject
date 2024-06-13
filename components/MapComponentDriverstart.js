import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {MapStyle} from '../styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useDispatch, useSelector} from 'react-redux';

// const data = useSelector((state) => state.mapData);

const MapComponentDriverstart = ({pickupLocation, dropLocation}) => {
  const {Dorigin, Ddestination} = useSelector(state => state.DmapData);
  // console.log(Dorigin);
  const [travelTime, setTravelTime] = useState(null);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBpPGnre332uNnud4OPqcSpvUSUTuAmWnc';
  const midpoint = {
    latitude: (Dorigin.latitude + Ddestination.latitude) / 2,
    longitude: (Dorigin.longitude + Ddestination.longitude) / 2,
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
            origin={{latitude: Dorigin.latitude, longitude: Dorigin.longitude}}
            destination={{
              latitude: Ddestination.latitude,
              longitude: Ddestination.longitude,
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
              source={require('../assets/images/pickupmarker.png')}
              style={styles.markerOrigin2}
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

export default MapComponentDriverstart;

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
});
