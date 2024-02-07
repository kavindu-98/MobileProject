import {createSlice} from '@reduxjs/toolkit';
export const mapSliceDriver = createSlice({
  // to save the pickup and destination for driver
  name: 'map',
  initialState: {
    origin: {latitude: '', longitude: '', address: '', name: ''},
    destination: {latitude: '', longitude: '', address: '', name: ''},
  },

  reducers: {
    addOriginDriver: (state, action) => {
      state.origin = action.payload;
    },
    destinationDriver: (state, action) => {
      state.destination = action.payload;
    },
  },
});
export const {addOriginDriver, destinationDriver} = mapSliceDriver.actions;

export default mapSliceDriver.reducer;
