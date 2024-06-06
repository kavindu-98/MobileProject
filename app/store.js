import {configureStore} from '@reduxjs/toolkit';

import mapSlice from '../reducers/mapSlice';
import DmapSlice from '../reducers/mapSliceDriver';
import userLogInDataReducer from '../reducers/userSlice';
import driverLogInDataReducer from '../reducers/driverSlice';
import vehicleAddDataReducer from '../reducers/vehicleSlice';

export default configureStore({
  reducer: {
    mapData: mapSlice,
    DmapData: DmapSlice,
    userLogIn: userLogInDataReducer,
    driverLogIn: driverLogInDataReducer,
    AddVehicle: vehicleAddDataReducer,
  },
});
