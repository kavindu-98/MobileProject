import axios from 'axios';

import {getDriverCookie} from '../utils/getCookie';

const logIn = async ({Did, password1}) => {
  const config = {headers: {'Content-Type': 'application/json'}};
  const response = await axios.post(
    `http://10.0.2.2:5000/api/driver/login`,
    {Did, password1},
    config,
  );
  console.log(response);
  return response.data;
};
const signUp = async object => {
  const config = {headers: {'Content-Type': 'multipart/form-data'}};
  const response = await axios.post(
    `http://10.0.2.2:5000/api/driver/signup`,
    object,
    config,
  );
  console.log(response);
  return response.data;
};
const driverService = {logIn, signUp};
export default driverService;
