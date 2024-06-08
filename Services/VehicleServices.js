import axios from 'axios';

import {getDriverCookie} from '../utils/storage';

const AddVehicle = async object => {
  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    // Authorization: `Bearer ${object.jwt}`,
  };
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
const EditVehicle = async DriverID => {
  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    // Authorization: `Bearer ${object.jwt}`,
  };
  console.log(DriverID);
  const response = await axios.get(
    `http://10.0.2.2:5000/api/vehicle/EditVehicle/${DriverID}`,
    DriverID,
    config,
  );
  console.log('awaaa');
  console.log(response);
  return response.data;
};
const vehicleService = {AddVehicle, EditVehicle};
export default vehicleService;
