import {createAsyncThunk} from '@reduxjs/toolkit';
import driverService from '../Services/driverServices';

export const logInDriver = createAsyncThunk(
  'driver/login',
  async ({Did, password}, thunkAPI) => {
    try {
      const data = await driverService.logIn({Did, password});
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
export const signUpDriver = createAsyncThunk(
  'driver/signUp',
  async (object, thunkAPI) => {
    try {
      const data = await driverService.signUp(object);
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
export const updateDriver = createAsyncThunk(
  'driver/update',
  async (object, thunkAPI) => {
    try {
      console.log('update driver');
      const data = await driverService.update(object);
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
export const GetDriver = createAsyncThunk(
  'driver/GetDriver',
  async (driverId, thunkAPI) => {
    try {
      // console.log('palaweni eka athule');
      const data = await driverService.GetDriver(driverId);
      console.log('palaweni eka athule get driver', data);
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
