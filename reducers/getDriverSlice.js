import {createSlice} from '@reduxjs/toolkit';
import {GetDriver} from '../Actions/driverActions';

export const GetDriverSlice = createSlice({
  name: 'DriverData',
  initialState: {
    driver: {
      _id: '',
      FirstName: '',
      LastName: '',
      driverId: '',
      email: '',
      NIC: '',
      phone: '',
      licenceId: '',
      gender: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    resetDriverData: (state, action) => {
      state.driver = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(GetDriver.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetDriver.fulfilled, (state, action) => {
        state.driver = action.payload;
        state.loading = false;
      })
      .addCase(GetDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const {resetDriverData} = GetDriverSlice.actions;
export default GetDriverSlice.reducer;
