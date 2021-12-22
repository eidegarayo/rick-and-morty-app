import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = async (username, password) => {
  const url = `${API_URL}signup`;
  
  try {
    const response = await axios({
      method: 'post',
      url,
      headers: { 'Content-Type': 'application/json' },
      data: { username, password },
    });
    return response;
  } catch (error) {
    console.log("🚀 ~ file: authService.js ~ line 12 ~ register ~ error", error)
    return error;
  }
};

const login = () => {

}

export {
  register,
  login
};
