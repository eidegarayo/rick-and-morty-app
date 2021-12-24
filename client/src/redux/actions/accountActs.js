import authService from '../../services/api/authService';
import userService from '../../services/api/userService';
import { session } from '../../services/api/utils';

export const REGISTER_BEGIN = 'REGISTER_BEGIN';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const USER_BEGIN = 'USER_BEGIN';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

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
    login: true,
    accessToken,
  }
});

const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: {
    login: false,
    error,
  }
});

const login = (username, password) => (dispatch) => {
  dispatch(loginBegin());
  authService.login(username, password, (err, res) => {
    if (res) {
      const { user, accessToken } = res;
      dispatch(loginSuccess(accessToken));
      dispatch(userSuccess(user));
    } else {
      dispatch(loginFail(err));
    }
  });
};

const logout = () => (dispatch) => {
  session.remove();
  dispatch({ type: LOGOUT });
}

const userBegin = () => ({ type: USER_BEGIN });

const userSuccess = (user) => ({
  type: USER_SUCCESS,
  payload: {
    user
  }
});

const userFailure = error => ({
  type: USER_FAILURE,
  payload: {
    error
  }
});

const getUser = () => (dispatch) => {
  dispatch(userBegin());

  userService.getUserById((err, res) => {
    if (res?.success) return dispatch(userSuccess(res.user));
    return dispatch(userFailure(err.message));
  });
};

const accountActs = {
  login,
  logout,
  register,
  getUser,
};

export default accountActs;
