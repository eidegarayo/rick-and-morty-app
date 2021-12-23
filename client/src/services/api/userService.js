import axios from 'axios';

import { addHeaders, catchErrors, catchResponse, session } from './utils';

const API_URL = 'http://localhost:8080/api/user/';

const getUserById = async (callback) => {
  const url = `${API_URL}userbyid`;
  const headers = addHeaders(true);
  
  try {
    const response = await axios({
      method: 'get',
      url,
      headers,
    });
    console.log(response);
    return catchResponse.api(response, callback);
  } catch (error) {
    console.log("🚀 ~ file: authService.js ~ line 12 ~ register ~ error", error)
    return catchErrors.api(error, callback);
  }
};


const userService = {
  getUserById,
};

export default userService;
