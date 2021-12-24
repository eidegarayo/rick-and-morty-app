import axios from 'axios';

import { addHeaders, catchErrors, catchResponse } from './utils';

const API_URL = 'http://localhost:8080/api/user/';

const getUserById = async (callback) => {
  const url = `${API_URL}userbyid`;
  const headers = addHeaders(true);

  if (!headers[['x-access-token']]) return callback({ error: true, message: 'User not logged' }, null);
  
  try {
    const response = await axios({
      method: 'get',
      url,
      headers,
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.log("🚀 ~ file: authService.js ~ line 12 ~ register ~ error", error)
    return catchErrors.api(error, callback);
  }
};

const saveUserData = async (data, callback) => {
  console.log('----------------- SAVE USER DATA ---------------------')
  const url = `${API_URL}save-user`;
  const headers = addHeaders(true);

  try {
    const response = await axios({
      method: 'post',
      url,
      headers,
      data,
    });
    console.log(response)
    console.log('---------------------------------------')
    return catchResponse.api(response, callback);
  } catch (error) {
    console.log("🚀 ~ file: userService.js ~ line 39 ~ saveUserData ~ error", error)
    return catchErrors.api(error, callback); 
  }
}


const userService = {
  getUserById,
  saveUserData,
};

export default userService;
