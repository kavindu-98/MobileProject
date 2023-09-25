import { createSlice } from "@reduxjs/toolkit"
import { logInUser, signUpUser } from "../Actions/userActions"
import CookieManager from '@react-native-cookies/cookies';


//for the redux slices to lgin signup employee
const initialState={
    user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
    action:'',
}
export const userLogInDataSlice=createSlice({
    name:'userLogIn',
    initialState,
    reducers:{
        resetUserLogIn:(state)=>{
            state.user=null
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=''
            state.action=''
           
        },
        resetUserLoginStatus:(state)=>{
        state.isLoading=false
        state.isError=false
        state.isSuccess=false
        state.message=''
        state.action=''
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
export const {resetUserLogIn,resetUserLoginStatus}=userLogInDataSlice.actions
export default userLogInDataSlice.reducer