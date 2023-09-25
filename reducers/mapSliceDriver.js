import { createSlice } from "@reduxjs/toolkit";
export const mapSliceDriver = createSlice({

  // to save the pickup and destination for driver
  name: "map",
  initialState: {
    latitude:'',
    longitude:'',
    address:'',
    name:''
  },

  reducers: {
    addOriginDriver: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.address = action.payload.address;
      state.name = action.payload.name;
    
      
    },
    destinationDriver: (state, action) => {
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
        state.address = action.payload.address;
        state.name = action.payload.name;
      },
    },
  });
  export const { addOriginDriver, destinationDriver } = mapSliceDriver.actions;
  
  export default mapSliceDriver.reducer;