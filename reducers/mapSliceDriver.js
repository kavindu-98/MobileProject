import {createSlice} from '@reduxjs/toolkit';
export const mapSliceDriver = createSlice({
  // to save the pickup and destination for driver
  name: 'map',
  initialState: {
    Dorigin: {latitude: '', longitude: '', address: '', name: ''},
    Ddestination: {latitude: '', longitude: '', address: '', name: ''},
  },

  reducers: {
    addOriginDriver: (state, action) => {
      state.Dorigin = action.payload;
    },
    destinationDriver: (state, action) => {
      state.Ddestination = action.payload;
    },
  },
});
export const {addOriginDriver, destinationDriver} = mapSliceDriver.actions;

export default mapSliceDriver.reducer;
