import {createSlice} from '@reduxjs/toolkit';
import {GetVehicle} from '../Actions/VehicleInfo';

export const vehicleGetSlice = createSlice({
  name: 'vehicleData',
  initialState: {
    vehicle: {
      _id: '',
      DriverID: '',
      VehicleNo: '',
      VehicleLNo: '',
      VehicleType: '',
      VehicleINo: '',
      VehiclePNo: '',
      VehicleCon: '',
      VehicleNoS: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    resetVehicleData: (state, action) => {
      state.vehicle = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(GetVehicle.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetVehicle.fulfilled, (state, action) => {
        state.vehicle = action.payload;
        state.loading = false;
      })
      .addCase(GetVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const {resetVehicleData} = vehicleGetSlice.actions;
export default vehicleGetSlice.reducer;
