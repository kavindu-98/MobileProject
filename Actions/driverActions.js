import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../Services/driverServices";

export const logInDriver=createAsyncThunk('driver/login',async({Did,password1},thunkAPI)=>{
    try{
        const data=await userService.logIn({Did,password1})
        return data
    }
    catch(error){
        const message=(error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const signUpDriver=createAsyncThunk('driver/signUp',async(object,thunkAPI)=>{
    try{
        const data=await userService.signUp(object)
        return data
    }
    catch(error){
        const message=(error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})