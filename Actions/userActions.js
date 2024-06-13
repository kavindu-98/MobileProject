import {createAsyncThunk} from '@reduxjs/toolkit';
import userService from '../Services/userServices';

export const logInUser = createAsyncThunk(
  'user/login',
  async ({employeeId, password}, thunkAPI) => {
    try {
      const data = await userService.logIn({employeeId, password});
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
export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (object, thunkAPI) => {
    try {
      const data = await userService.signUp(object);
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
export const updateUser = createAsyncThunk(
  'user/update',
  async (object, thunkAPI) => {
    try {
      console.log('update user');
      const data = await userService.update(object);
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

export const GetUser = createAsyncThunk(
  'user/GetUser',
  async (employeeId, thunkAPI) => {
    try {
      // console.log('palaweni eka athule');
      const data = await userService.GetUser(employeeId);
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
