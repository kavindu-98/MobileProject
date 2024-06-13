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
  StyleSheet,
  Dimensions,
} from 'react-native';
import TextIconButton from './TextIconButton';
import {useNavigation} from '@react-navigation/native';
import {onValue, ref, set} from 'firebase/database';
import {database} from '../firebase';

import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../constants';
const {width, height} = Dimensions.get('window');

const EmployeeCard = ({ImageUri, Name, PhoneNo}) => {
  const [ReqDetails, setReqDetails] = useState({});
  const [IsAccept, setIsAccept] = useState('');
  const [showRequest, setShowRequest] = useState(true);
  useEffect(() => {
    ReadRide();

    // console.log('vehicle:', vehicle);
  }, []);

  const ReadRide = async () => {
    const startCountRef = ref(database, 'request/');
    onValue(
      startCountRef,
      snapshot => {
        const data = snapshot.val();
        if (data) {
          setReqDetails(data);
          console.log('vehicle:', ReqDetails);
          alert('Req read successfully!');
        } else {
          console.error('No data available');
          alert('Failed to read Request. Please try again.');
        }
      },
      error => {
        console.error('Error reading Request: ', error);
        alert('Failed to read Request. Please try again.');
      },
    );
  };
  const AccReq = async () => {
    setIsAccept(true);
    console.log(IsAccept);
    set(ref(database, 'AccReq/'), {
      Request: IsAccept,
    })
      .then(() => {
        alert('Accept req added successfully!');
        navigation.navigate('DFinishRide', ReqDetails);
      })
      .catch(error => {
        console.error('Error Accept req: ', error);
        alert('Failed to Accept req. Please try again.');
      });
  };
  const RejReq = async () => {
    setIsAccept(false);
    setShowRequest(false);
    console.log(IsAccept);
    set(ref(database, 'AccReq/'), {
      Request: IsAccept,
    })
      .then(() => {
        alert('reject req added successfully!');
        // navigation.navigate('DFinishRide');
      })
      .catch(error => {
        console.error('Error reject req: ', error);
        alert('Failed to reject req. Please try again.');
      });
  };
  const navigation = useNavigation();
  const renderItem = item => (
    <View
      style={{
        height: 145,
        width: width * 0.9,
        marginLeft: 20,
        marginTop: 15,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: COLORS.black,
        flexDirection: 'row',
      }}>
      <View style={{flexDirection: 'column'}}>
        <View style={styles.Circle}>
          <Image
            source={require('../assets/images/pro.jpg')}
            style={styles.profileimage}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/icons/call.png')}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              marginLeft: 15,
              marginTop: 20,

              // tintColor: COLORS.red1Font,
            }}
          />
          <Image
            source={require('../assets/icons/mesg.png')}
            resizeMode="contain"
            style={{
              width: 35,
              height: 35,
              marginLeft: 15,
              marginTop: 20,

              // tintColor: COLORS.red1Font,
            }}
          />
        </View>
      </View>
      <View style={{marginLeft: -20}}>
        <Text
          style={{
            ...FONTS.h2,
            marginLeft: 60,
            marginTop: 2,
            color: COLORS.black,
          }}>
          {item.EmpName1}
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            marginLeft: 60,
            marginTop: 5,
          }}>
          {item.EmpNo}
        </Text>
        <Image
          source={require('../assets/images/Line1.png')}
          resizeMode="contain"
          style={{
            width: 230,
            height: 20,
            marginLeft: 56,

            tintColor: COLORS.gray20,
          }}
        />
        {/* <View
          style={{
            flexDirection: 'row',
          }}> */}
        {/* <View>
            <Image
              source={require('../assets/icons/StartL.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 56,

                // tintColor: COLORS.red1Font,
              }}
            />
            <Text
              style={{
                ...FONTS.h4,
                marginLeft: 84,
                marginTop: -21,
              }}>
              {item.name}
            </Text>
          </View> */}
        {/* <View
            style={{
              marginLeft: -45,
            }}>
            <Image
              source={require('../assets/icons/Des.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                marginLeft: 56,

                // tintColor: COLORS.red1Font,
              }}
            />
            <Text
              style={{
                ...FONTS.h4,
                marginLeft: 84,
                marginTop: -21,
              }}>
             
            </Text>
          </View> */}
        {/* // </View> */}

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextIconButton
            label="ACCEPT"
            customContainerStyle={{
              width: '32%',
              height: 25,
              backgroundColor: COLORS.red1Font,
              borderWidth: 1,
              borderColor: COLORS.red1Font,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding3,
              marginLeft: 50,
            }}
            customLabelStyle={{
              color: COLORS.white,
              alignItems: 'center',
              marginLeft: -15,
              ...FONTS.h4,
            }}
            onPress={AccReq}
          />
          <TextIconButton
            label="CANCEL"
            customContainerStyle={{
              width: '32%',
              height: 25,
              backgroundColor: COLORS.gray20,
              borderWidth: 1,
              borderColor: COLORS.gray20,
              borderRadius: SIZES.radius_btn4,
              marginTop: SIZES.padding3,
              marginLeft: 20,
            }}
            customLabelStyle={{
              color: COLORS.white,
              alignItems: 'center',
              marginLeft: -15,
              ...FONTS.h4,
            }}
            onPress={RejReq}
          />
        </View>
      </View>
    </View>
  );
  return (
    <View>
      {showRequest ? (
        <ScrollView>
          {ReqDetails ? (
            renderItem(ReqDetails)
          ) : (
            <Text>No Request available</Text>
          )}
        </ScrollView>
      ) : (
        <Text>No Request available</Text>
      )}
    </View>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  profileimage: {
    width: 70,
    height: 70,
    borderRadius: 1300,
    // overflow: "hidden",
    marginLeft: 10,
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
