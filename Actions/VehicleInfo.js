import {createAsyncThunk} from '@reduxjs/toolkit';
import vehicleService from '../Services/VehicleServices';

export const AddNewVehicle = createAsyncThunk(
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

export const EditVehicle = createAsyncThunk(
  'vehicle/EditVehicle',
  async (DriverID, thunkAPI) => {
    try {
      // console.log('palaweni eka athule');
      const data = await vehicleService.EditVehicle(DriverID);
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
export const GetVehicle = createAsyncThunk(
  'vehicle/GetVehicle',
  async (VehicleNo, thunkAPI) => {
    try {
      // console.log('palaweni eka athule');
      const data = await vehicleService.GetVehicle(VehicleNo);
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

export const UpdateVehicle = createAsyncThunk(
  'vehicle/UpdateVehicle',
  async (object, thunkAPI) => {
    try {
      console.log('update vehicle');
      const data = await vehicleService.UpdateVehicle(object);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
