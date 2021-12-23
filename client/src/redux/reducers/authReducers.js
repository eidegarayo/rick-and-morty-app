import { 
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/authActs';


const initialState = {
  loading: false,
  loginError: false,
  registerError: false,
  user: null,
  accessToken: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        registerError: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        registerError: payload.error,
      };
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        accessToken: payload.accessToken,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loginError: payload.error,
        user: null,
        accessToken: null,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

export default user;
