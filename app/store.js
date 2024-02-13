import {configureStore} from '@reduxjs/toolkit';

import mapSlice from '../reducers/mapSlice';
import userLogInDataReducer from '../reducers/userSlice';
import driverLogInDataReducer from '../reducers/driverSlice';
import vehicleAddDataReducer from '../reducers/vehicleSlice';

export default configureStore({
  reducer: {
    mapData: mapSlice,
    userLogIn: userLogInDataReducer,
    driverLogIn: driverLogInDataReducer,
    AddVehicle: vehicleAddDataReducer,
  },
});
