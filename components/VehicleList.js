import React, {useEffect, useState} from 'react';
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
import {VehicleDetails} from '../Data/Data';
import {DStartLocation} from '../screens';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {EditVehicle} from '../Actions/VehicleInfo';

const VehicleList = ({}) => {
  const navigation = useNavigation();
  const [VehicleDetails1, setVehicleDetails] = useState({});
  const [driverDetails, setDriverDetails] = useState({});
  const {driver} = useSelector(state => state.driverLogIn);
  const {vehicle} = useSelector(state => state.EditVehicle);
  const dispatch = useDispatch();

  useEffect(() => {
    if (driver) {
      setDriverDetails(driver._doc);
      dispatch(EditVehicle(driverDetails.driverId));
      console.log('vehicle:', vehicle);
    }
  }, [dispatch, driverDetails.driverId]);

  useEffect(() => {
    if (Array.isArray(vehicle)) {
      setVehicleDetails(vehicle);
      console.log('Vehicle details:', vehicle);
    }
  }, [vehicle]);
  return (
    <ScrollView>
      {VehicleDetails1 && VehicleDetails1.length > 0 ? (
        VehicleDetails1.map((item, index) => (
          <TouchableOpacity>
            <View
              style={{
                height: 125,
                width: width * 0.9,
                marginTop: 15,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: COLORS.black,
                flexDirection: 'row',
              }}
              key={item._id}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.Circle}>
                  <Image
                    source={require('../assets/images/Bus.png')}
                    style={styles.profileimage}
                    resizeMode="center"
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.h2,
                    marginLeft: 20,
                    marginTop: 20,
                    color: COLORS.black,
                  }}>
                  {item.VehicleNo}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 20,
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
                    marginLeft: 20,
                    marginTop: 10,
                    // tintColor: COLORS.red1Font
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 60,
                    marginTop: -25,
                  }}>
                  {item.VehicleNoS} Seats Available
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('VehicleDt1ScreenEdit', item);
                  }}>
                  <Image
                    source={require('../assets/icons/edit.png')}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: -15,
                      marginTop: 45,
                      tintColor: COLORS.gray30,
                    }}
                  />
                </TouchableOpacity>
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

export default VehicleList;

const styles = StyleSheet.create({
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    // overflow: "hidden",
  },
  Circle: {
    width: 100,
    height: 100,
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
