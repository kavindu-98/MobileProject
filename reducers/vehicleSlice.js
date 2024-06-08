import {createSlice} from '@reduxjs/toolkit';
import {AddNewVehicle} from '../Actions/VehicleInfo';

//for the redux slices to lgin signup driver

const initialState = {
  vehicle: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  action: '',
};
export const vehicleDataSlice = createSlice({
  name: 'AddVehicle',
  initialState,
  reducers: {
    resetVehicleData: state => {
      state.vehicle = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.action = '';
    },
    resetVehicleDataStatus: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.action = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(AddNewVehicle.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.action = 'AddNewVehicle';
        state.message = '';
      })
      .addCase(AddNewVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.action = 'AddNewVehicle';
        state.vehicle = action.payload; // Update state.vehicle with the returned data
        state.message = 'Vehicle added successfully';
      })
      .addCase(AddNewVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.action = 'AddNewVehicle';
        state.message = action.payload;
      });
  },
});
export const {resetVehicleData, resetVehicleDataStatus} =
  vehicleDataSlice.actions;
export default vehicleDataSlice.reducer;
