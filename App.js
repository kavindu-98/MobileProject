import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LoginScreen,
  HomeScreen,
  WelcomeScreen,
  Finish,
  SignUpScreen,
  AcceptDriver,
  GetStartScreen,
  Destination,
  DestinationEdit,
  VehicleDt1Screen,
  DLoginScreen,
  RouteDetailsInput,
  VehicleDt2Screen,
  DRSignUpScreen,
  DriverDetails,
  RoleSelect,
  OTPScreen,
  DOTPScreen,
  SlScreen,
  DSlScreen,
  RatingScreen,
  MyActivity,
  SetDestiOnMap,
  NoteToDriver,
  SelectDriver,
  DSetStartOnMap,
  AcceptEmpReq,
  PendingDriver,
  DFinishRide,
  MyDailyRides,
  DStartRide,
  DailyRides,
  DRDailyRides,
  DRProfileInfo,
  ProfileInfo,
  DRMyDailyRides,
  DestinationDriver,
  DStartLocation,
  AddVehicle,
  VehicleDt1ScreenEdit,
  VehicleDt2ScreenEdit,
  ProfileScreen,
  SelectVehicle,
} from './screens';
import Tabs from './navigation/tabs';
import DTabs from './navigation/Dtabs';
import {
  OriginContextProvider,
  DestinationContextProvider,
} from './contexts/contexts';
import {
  OriginDriverContextProvider,
  DestinationDriverContextProvider,
} from './contexts/contextsDriver';
import {Provider} from 'react-redux';
import store from './app/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <DestinationDriverContextProvider>
        <OriginDriverContextProvider>
          <DestinationContextProvider>
            <OriginContextProvider>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}
                  initialRouteName={'Role'}>
                  {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
                  <Stack.Screen name="Role" component={RoleSelect} />
                  <Stack.Screen name="SL" component={SlScreen} />
                  <Stack.Screen name="DSL" component={DSlScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="OTP" component={OTPScreen} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen
                    name="GetStartScreen"
                    component={GetStartScreen}
                  />
                  <Stack.Screen name="Home" component={Tabs} />
                  <Stack.Screen name="Destination" component={Destination} />
                  <Stack.Screen name="SetDesM" component={SetDestiOnMap} />
                  <Stack.Screen name="SeleDriver" component={SelectDriver} />

                  <Stack.Screen
                    name="PendingDriver"
                    component={PendingDriver}
                  />
                  <Stack.Screen name="AcceptDriver" component={AcceptDriver} />
                  <Stack.Screen name="Finish" component={Finish} />
                  <Stack.Screen name="NoteToDriver" component={NoteToDriver} />
                  <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                  />
                  <Stack.Screen name="RatingScreen" component={RatingScreen} />
                  <Stack.Screen name="MyActivity" component={MyActivity} />
                  <Stack.Screen name="MyDailyRides" component={MyDailyRides} />
                  <Stack.Screen
                    name="DestinationEdit"
                    component={DestinationEdit}
                  />
                  <Stack.Screen name="DailyRides" component={DailyRides} />

                  <Stack.Screen
                    name="DriverDetails"
                    component={DriverDetails}
                  />
                  <Stack.Screen
                    name="DRSignUpScreen"
                    component={DRSignUpScreen}
                  />
                  <Stack.Screen
                    name="VehicleDt1Screen"
                    component={VehicleDt1Screen}
                  />
                  <Stack.Screen
                    name="VehicleDt2Screen"
                    component={VehicleDt2Screen}
                  />
                  <Stack.Screen
                    name="RouteDetailsInput"
                    component={RouteDetailsInput}
                  />
                  <Stack.Screen name="DLogin" component={DLoginScreen} />
                  <Stack.Screen name="DOTP" component={DOTPScreen} />
                  <Stack.Screen name="DHome" component={DTabs} />
                  <Stack.Screen
                    name="DestinationDriver"
                    component={DestinationDriver}
                  />
                  <Stack.Screen
                    name="VehicleDt1ScreenEdit"
                    component={VehicleDt1ScreenEdit}
                  />
                  <Stack.Screen
                    name="VehicleDt2ScreenEdit"
                    component={VehicleDt2ScreenEdit}
                  />
                  <Stack.Screen name="AddVehicle" component={AddVehicle} />
                  <Stack.Screen
                    name="DStartLocation"
                    component={DStartLocation}
                  />
                  <Stack.Screen
                    name="DSetStartOnMap"
                    component={DSetStartOnMap}
                  />
                  <Stack.Screen name="DStartRide" component={DStartRide} />
                  <Stack.Screen name="AcceptEmpReq" component={AcceptEmpReq} />
                  <Stack.Screen name="DFinishRide" component={DFinishRide} />
                  <Stack.Screen
                    name="DRProfileInfo"
                    component={DRProfileInfo}
                  />
                  <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
                  <Stack.Screen
                    name="DRMyDailyRides"
                    component={DRMyDailyRides}
                  />
                  <Stack.Screen name="DRDailyRides" component={DRDailyRides} />
                  <Stack.Screen
                    name="SelectVehicle"
                    component={SelectVehicle}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </OriginContextProvider>
          </DestinationContextProvider>
        </OriginDriverContextProvider>
      </DestinationDriverContextProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
