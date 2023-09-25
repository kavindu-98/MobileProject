import { createSlice } from "@reduxjs/toolkit";
export const mapSlice = createSlice({

  // to save the pickup and destination for employee
  name: "map",
  initialState: {
    origin:{latitude:'',
    longitude:'',
    address:'',
    name:''},
    destination:{latitude:'',
    longitude:'',
    address:'',
    name:''},
    
  },

  reducers: {
    addOrigin: (state, action) => {
      state.origin = action.payload
      
    
      
    },
    destination: (state, action) => {
        state.destination = action.payload;
       
      },
    },
  });
  export const { addOrigin, destination } = mapSlice.actions;
  
  export default mapSlice.reducer;