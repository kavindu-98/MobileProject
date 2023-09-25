import axios from "axios"

const logIn=async({employeeId,password})=>{
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/driver/login`,{employeeId,password},config)
console.log(response)
return response.data
}
const signUp=async(object)=>{
    const config={headers:{'Content-Type':'application/json'}}
const response=await axios.post(`http://10.0.2.2:5000/api/driver/signup`,object,config)
console.log(response)
return response.data
}
const driverService={logIn,signUp}
export default driverService