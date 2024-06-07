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

const VehicleList = ({}) => {
  const navigation = useNavigation();
  const [VehicleDetails1, setVehicleDetails] = useState({});
  const {vehicle} = useSelector(state => state.AddVehicle);

  useEffect(() => {
    if (vehicle) {
      setVehicleDetails(vehicle);
      console.log('vehicle:', vehicle);
    }
  }, [vehicle]);

  return (
    <ScrollView>
      {VehicleDetails.map((item, index) => {
        return (
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
              key={item.id}>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.Circle}>
                  <Image
                    source={item.VehicleP1}
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
                  {item.VNo}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    marginLeft: 20,
                    marginTop: 5,
                  }}>
                  {item.VType} * {item.Conditon}
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
                  {item.NoOfSeat} Seats Available
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
                      marginLeft: 5,
                      marginTop: 45,
                      tintColor: COLORS.gray30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
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
