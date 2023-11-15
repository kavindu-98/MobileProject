import axios from "axios"
// require('dotenv').config()
// import {APIDOMAIN} from "@env"
// import { APIDOMAIN } from 'react-native-dotenv';

const logIn=async({employeeId,password})=>{
    
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/users/login`,{employeeId,password},config)
console.log(response)
return response.data
}
const signUp=async(object)=>{
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/users/signup`,object,config)
console.log(response)
return response.data
}
const userService={logIn,signUp}
export default userService