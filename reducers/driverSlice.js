import { createSlice } from "@reduxjs/toolkit"
import { logInUser, signUpUser } from "../Actions/userActions"
import CookieManager from '@react-native-cookies/cookies';


//for the redux slices to lgin signup driver

const initialState={
    driver:null,
    data:{},
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
    action:'',
}
export const driverLogInDataSlice=createSlice({
    name:'driverLogIn',
    initialState,
    reducers:{
        resetDriverLogIn:(state)=>{
            state.driver=null
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=''
            state.action=''
           
        },
        resetDriverLoginStatus:(state)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=false
        state.message=''
        state.action=''
        },
        signupProcess:(state,action)=>{
state.data=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(logInUser.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
            state.action='logInUser'
            state.message=''
        })
        .addCase(logInUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.user=action.payload
            state.action='logInUser'
            state.message=''
        })
        .addCase(logInUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.action='logInUser'
            state.message=action.payload
        })
        .addCase(signUpUser.pending,(state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
            state.action='signUpUser'
            state.message=''
        })
        .addCase(signUpUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.action='signUpUser'
            state.message=action.payload
        })
        .addCase(signUpUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.action='signUpUser'
            state.message=action.payload
        })
    }
})
export const {resetDriverLogIn,resetDriverLoginStatus}=driverLogInDataSlice.actions
export default driverLogInDataSlice.reducer