import axios from 'axios';

import { addHeaders, catchErrors, catchResponse } from './utils';

const API_URL = 'http://localhost:8080/api/auth/';

const register = async (username, password, callback) => {
  const url = `${API_URL}signup`;
  const headers = addHeaders();

  try {
    const response = await axios({
      method: 'post',
      url,
      headers,
      data: { username, password },
    });
    return catchResponse.api(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: authService.js ~ line 12 ~ register ~ error', error);
    return catchErrors.api(error, callback);
  }
};

const login = async (username, password, callback) => {
  const url = `${API_URL}signin`;
  const headers = addHeaders();

  try {
    const response = await axios({
      url,
      method: 'post',
      headers,
      data: { username, password },
    });
    return catchResponse.auth(response, callback);
  } catch (error) {
    console.error('🚀 ~ file: authService.js ~ line 34 ~ login ~ error', error);
    return catchErrors.api(error, callback);
  }
};

const authService = {
  register,
  login,
};

export default authService;
