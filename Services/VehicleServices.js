import axios from 'axios';

import {getDriverCookie} from '../utils/getCookie';

const AddVehicle = async object => {
  const config = {headers: {'Content-Type': 'multipart/form-data'}};
  console.log(object);
  const response = await axios.post(
    `http://10.0.2.2:5000/api/vehicle/AddVehicle`,
    object,
    config,
  );
  console.log('awaaa');
  console.log(response);
  return response.data;
};
const vehicleService = {AddVehicle};
export default vehicleService;
