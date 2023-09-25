import { configureStore } from '@reduxjs/toolkit';

import mapSlice from '../reducers/mapSlice';
import  userLogInDataReducer from '../reducers/userSlice';
import  driverLogInDataReducer from '../reducers/driverSlice';

export default configureStore({
  reducer: {
    mapData:mapSlice,
    userLogIn:userLogInDataReducer,
    driverLogIn:driverLogInDataReducer,

  },
})