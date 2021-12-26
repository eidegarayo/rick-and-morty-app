import axios from 'axios';

import { addHeaders, catchErrors, catchResponse } from './utils';
import { config } from './config';

const API_URL = `${config.baseUrl}user/`;

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
    console.error('🚀 ~ file: authService.js ~ line 12 ~ register ~ error', error);
    return catchErrors.api(error, callback);
  }
};

const saveUserData = async (data, callback) => {
  const url = `${API_URL}save-user`;
  const headers = addHeaders(true);

  try {
    const response = await axios({
      method: 'post',
      url,
      headers,
      data,
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: userService.js ~ line 39 ~ saveUserData ~ error', error);
    return catchErrors.api(error, callback);
  }
};


const userService = {
  getUserById,
  saveUserData,
};

export default userService;
