import axios from 'axios';

import {getDriverCookie} from '../utils/storage';

const logIn = async ({Did, password}) => {
  const config = {headers: {'Content-Type': 'application/json'}};
  const response = await axios.post(
    `http://10.0.2.2:5000/api/driver/login`,
    {Did, password},
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
const update = async updateObject => {
  console.log('before jwt');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${updateObject.jwt}`,
    },
  };
  const response = await axios.post(
    'http://10.0.2.2:5000/api/driver/update',
    updateObject,
    config,
  );
  console.log(response);
  return response.data;
};

const GetDriver = async driverID => {
  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    // Authorization: `Bearer ${object.jwt}`,
  };
  console.log(driverID);
  const response = await axios.get(
    `http://10.0.2.2:5000/api/driver/GetDriver/${driverID}`,
    driverID,
    config,
  );
  console.log('awaaa');
  console.log(response);
  return response.data;
};
const driverService = {logIn, signUp, update, GetDriver};
export default driverService;
