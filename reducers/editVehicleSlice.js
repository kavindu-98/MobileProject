import {createSlice} from '@reduxjs/toolkit';
import {EditVehicle} from '../Actions/VehicleInfo';

export const vehicleEditSlice = createSlice({
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
      .addCase(EditVehicle.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditVehicle.fulfilled, (state, action) => {
        state.vehicle = action.payload;
        state.loading = false;
      })
      .addCase(EditVehicle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const {resetVehicleData} = vehicleEditSlice.actions;
export default vehicleEditSlice.reducer;
