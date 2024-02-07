import {createSlice} from '@reduxjs/toolkit';
import {logInDriver, signUpDriver} from '../Actions/driverActions';

//for the redux slices to lgin signup driver

const initialState = {
  driver: null,
  data: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  action: '',
};
export const driverLogInDataSlice = createSlice({
  name: 'driverLogIn',
  initialState,
  reducers: {
    resetDriverLogIn: state => {
      state.driver = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.action = '';
    },
    resetDriverLoginStatus: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.action = '';
    },
    signupProcess: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logInDriver.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.action = 'logInDriver';
        state.message = '';
      })
      .addCase(logInDriver.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.driver = action.payload;
        state.action = 'logInDriver';
        state.message = '';
      })
      .addCase(logInDriver.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.action = 'logInDriver';
        state.message = action.payload;
      })
      .addCase(signUpDriver.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.action = 'signUpDriver';
        state.message = '';
      })
      .addCase(signUpDriver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.action = 'signUpDriver';
        state.message = action.payload;
      })
      .addCase(signUpDriver.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.action = 'signUpDriver';
        state.message = action.payload;
      });
  },
});
export const {resetDriverLogIn, resetDriverLoginStatus} =
  driverLogInDataSlice.actions;
export default driverLogInDataSlice.reducer;
