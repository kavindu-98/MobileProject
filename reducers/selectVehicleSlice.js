import {createSlice} from '@reduxjs/toolkit';

export const SelectVehicleSlice = createSlice({
  name: 'vehicleData',
  initialState: {
    vehicle: {
      _id: '',
      DriverID: '',
      DriverName: '',
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
    SelectVehicleData: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export const {SelectVehicleData} = SelectVehicleSlice.actions;
export default SelectVehicleSlice.reducer;
