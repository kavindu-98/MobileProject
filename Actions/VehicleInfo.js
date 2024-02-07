import {createAsyncThunk} from '@reduxjs/toolkit';
import vehicleService from '../Services/VehicleServices';

export const AddVehicle = createAsyncThunk(
  'vehicle/AddVehicle',
  async (object, thunkAPI) => {
    try {
      console.log('palaweni eka athule');
      const data = await vehicleService.AddVehicle(object);
      console.log('palaweni eka athule', data);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log('error:', message);
      return thunkAPI.rejectWithValue(message);
    }
  },
);
