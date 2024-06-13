import {configureStore} from '@reduxjs/toolkit';

import mapSlice from '../reducers/mapSlice';
import DmapSlice from '../reducers/mapSliceDriver';
import userLogInDataReducer from '../reducers/userSlice';
import driverLogInDataReducer from '../reducers/driverSlice';
import vehicleAddDataReducer from '../reducers/vehicleSlice';
import vehicleEditDataReducer from '../reducers/editVehicleSlice';
import SelectVehicleSlice from '../reducers/selectVehicleSlice';
import GetvehicleDataReducer from '../reducers/getVehicleSlice';
import GetDriverDataSlice from '../reducers/getDriverSlice';

export default configureStore({
  reducer: {
    mapData: mapSlice,
    DmapData: DmapSlice,
    userLogIn: userLogInDataReducer,
    driverLogIn: driverLogInDataReducer,
    AddVehicle: vehicleAddDataReducer,
    EditVehicle: vehicleEditDataReducer,
    SelectVehicle: SelectVehicleSlice,
    GetVehicle: GetvehicleDataReducer,
    GetDriver: GetDriverDataSlice,
  },
});
