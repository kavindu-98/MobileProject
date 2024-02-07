import {createSlice} from '@reduxjs/toolkit';
import {AddVehicle} from '../Actions/VehicleInfo';

//for the redux slices to lgin signup driver

const initialState = {
  vehicle: null,
  data: {},
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
    signupProcess: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(AddVehicle.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.action = 'AddVehicle';
        state.message = '';
      })
      .addCase(AddVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.action = 'AddVehicle';
        state.message = action.payload;
      })
      .addCase(AddVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.action = 'AddVehicle';
        state.message = action.payload;
      });
  },
});
export const {resetVehicleData, resetVehicleDataStatus} =
  vehicleDataSlice.actions;
export default vehicleDataSlice.reducer;