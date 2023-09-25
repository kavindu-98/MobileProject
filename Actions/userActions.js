import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../Services/userServices";

export const logInUser=createAsyncThunk('user/login',async({employeeId,password},thunkAPI)=>{
    try{
        const data=await userService.logIn({employeeId,password})
        return data
    }
    catch(error){
        const message=(error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const signUpUser=createAsyncThunk('user/signUp',async(object,thunkAPI)=>{
    try{
        const data=await userService.signUp(object)
        return data
    }
    catch(error){
        const message=(error.response && error.response.data && error.response.data.message)||error.message||error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})