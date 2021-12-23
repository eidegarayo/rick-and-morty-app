import authService from '../../services/api/authService'

export const REGISTER_BEGIN = 'REGISTER_BEGIN';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

const registerBegin = () => ({ type: REGISTER_BEGIN });

const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

const registerFail = (error) => ({
  type: REGISTER_FAIL,
  payload: {
    error,
  },
});

const register = (username, password) => (dispatch) => {
  dispatch(registerBegin());

  authService.register(username, password, (err, res) => {
    if (res) {
      dispatch(registerSuccess());
      login(username, password);
    } else {
      dispatch(registerFail);
    }
  });
};

const loginBegin = () => ({ type: LOGIN_BEGIN });

const loginSuccess = (user, accessToken) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
    accessToken,
  }
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: {
    error,
  }
});

const login = (username, password) => (dispatch) => {
  dispatch(loginBegin());
  authService.login(username, password, (err, res) => {
    if (res) {
      const { user, accessToken } = res;
      dispatch(loginSuccess(user, accessToken));
    } else {
      dispatch(loginFail(err));
    }
  });
};

const authActs = {
  login,
  register,
};

export default authActs;
