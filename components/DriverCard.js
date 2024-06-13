import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Button,
  // Section,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons, images} from '../constants';
const {width, height} = Dimensions.get('window');
import {Drivercards} from '../Data/Data';
import {DriverDetails} from '../screens';
import {useNavigation} from '@react-navigation/native';
import {onValue, ref} from 'firebase/database';
import {database} from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import {GetVehicle} from '../Actions/VehicleInfo';
import {GetDriver} from '../Actions/driverActions';

const DriverCard = ({}) => {
  const navigation = useNavigation();
  const {origin, destination} = useSelector(state => state.mapData);
  const [driverDetails, setDriverDetails] = useState({});
  const [vehicleDetails, setvehicleDetails] = useState({});
  const [RideDetails, setRideDetails] = useState({});
  const {driver} = useSelector(state => state.GetDriver);
  const {vehicle} = useSelector(state => state.GetVehicle);
  const dispatch = useDispatch();
  const Dorigin = RideDetails.origin;
  const Ddestination = RideDetails.destination;
  const [filteredVehicleDetails, setFilteredVehicleDetails] = useState([]);

  const isWithinRoute = (Dorigin, Ddestination, origin, destination) => {
    if (
      !Dorigin ||
      !Dorigin.latitude ||
      !Dorigin.longitude ||
      !Ddestination ||
      !Ddestination.latitude ||
      !Ddestination.longitude ||
      !origin ||
      !origin.latitude ||
      !origin.longitude ||
      !destination ||
      !destination.latitude ||
      !destination.longitude
    ) {
      console.log('One or more required parameters are missing or incomplete.');
      return false;
    }
    const latWithinBounds = (lat, lat1, lat2) =>
      lat >= Math.min(lat1, lat2) && lat <= Math.max(lat1, lat2);
    const lonWithinBounds = (lon, lon1, lon2) =>
      lon >= Math.min(lon1, lon2) && lon <= Math.max(lon1, lon2);

    return (
      latWithinBounds(
        origin.latitude,
        Dorigin.latitude,
        Ddestination.latitude,
      ) &&
      lonWithinBounds(
        origin.longitude,
        Dorigin.longitude,
        Ddestination.longitude,
      ) &&
      latWithinBounds(
        destination.latitude,
        Dorigin.latitude,
        Ddestination.latitude,
      ) &&
      lonWithinBounds(
        destination.longitude,
        Dorigin.longitude,
        Ddestination.longitude,
      )
    );
  };
  console.log(
    'iswithin route',
    isWithinRoute(Dorigin, Ddestination, origin, destination),
  ); // Output: true or false

  useEffect(() => {
    ReadRide();

    // console.log('vehicle:', vehicle);
  }, []);

  useEffect(() => {
    if (RideDetails) {
      dispatch(GetVehicle(RideDetails.vehicleNo));
      dispatch(GetDriver(RideDetails.driverID));
      setvehicleDetails(vehicle);
      // setDriverDetails(driver._doc);
      console.log('vehicle:', vehicleDetails);
      // console.log('driver:', driver._doc);
    }
  }, []);

  useEffect(() => {
    if (vehicle && Array.isArray(vehicle) && vehicle.length > 0) {
      console.log('Vehicle data:', vehicle);
      const singleVehicle = vehicle[0];
      const isRouteValid = isWithinRoute(
        Dorigin,
        Ddestination,
        origin,
        destination,
      );
      if (isRouteValid) {
        setFilteredVehicleDetails([singleVehicle]); // Convert to array for consistency
      } else {
        setFilteredVehicleDetails([]);
      }
    }
  }, [vehicle, Dorigin, Ddestination, origin, destination]);

  const ReadRide = async () => {
    const startCountRef = ref(database, 'routes/');
    onValue(
      startCountRef,
      snapshot => {
        const data = snapshot.val();
        if (data) {
          setRideDetails(data);
          console.log('vehicle:', RideDetails);
          alert('Route read successfully!');
        } else {
          console.error('No data available or driverID is missing');
          alert('Failed to read Route. Please try again.');
        }
      },
      error => {
        console.error('Error reading Route: ', error);
        alert('Failed to read Route. Please try again.');
      },
    );
  };

  // console.log('driver:', driverDetails);
  return (
    <ScrollView>
      {filteredVehicleDetails && filteredVehicleDetails.length > 0 ? (
        filteredVehicleDetails.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DriverDetails', {
                item: item,
                rideDetails: RideDetails,
              });
            }}>
            <View
              style={{
                height: 125,
                width: width * 0.9,
                marginLeft: 20,
                marginTop: 15,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: COLORS.black,
                flexDirection: 'row',
              }}
              key={item.id}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.Circle}>
                  <Image
                    source={require('../assets/images/pro.jpg')}
                    style={styles.profileimage}
                    resizeMode="center"
                  />
                </View>

                {/* <View style={styles.Rating}>
                  <Image
                    source={require('../assets/images/Star.png')}
                    style={styles.profileimage1}
                    resizeMode="center"
                  />
                  <Text
                    style={{
                      marginTop: 22,
                      marginLeft: 7,
                      ...FONTS.h2,
                    }}>
                    {item.ratings}
                  </Text>
                </View> */}
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.h2,
                    marginLeft: 60,
                    marginTop: 20,
                    color: COLORS.black,
                  }}>
                  {item.VehicleNo}
                </Text>
                {/* <Text
                  style={{
                    ...FONTS.h2,
                    marginLeft: 60,
                    marginTop: 20,
                    color: COLORS.black,
                  }}>
                  {driverDetails.FirstName}
                </Text> */}
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 60,
                    marginTop: 5,
                  }}>
                  {item.VehicleType} * {item.VehicleCon}
                </Text>
                <Image
                  source={require('../assets/icons/Seats.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 56,
                    marginTop: 10,
                    // tintColor: COLORS.red1Font
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 100,
                    marginTop: -25,
                  }}>
                  {item.VehicleNoS} Available
                </Text>
              </View>
              <View>
                <Image
                  source={require('../assets/icons/right_arrow.png')}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: 5,
                    marginTop: 45,
                    tintColor: COLORS.gray30,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No vehicles available</Text>
      )}
    </ScrollView>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
  profileimage: {
    width: 70,
    height: 70,
    borderRadius: 1300,
    // overflow: "hidden",
  },
  profileimage1: {
    width: 25,
    height: 25,
    borderRadius: 1300,
    marginTop: 23,
    marginLeft: 18,
    // overflow: "hidden",
  },
  Circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,

    // overflow: "hidden",
  },
  Rating: {
    flexDirection: 'row',
    marginTop: -5,
    marginLeft: -5,
  },
});
