import { 
  USER_BEGIN,
  USER_FAILURE,
  USER_SUCCESS,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/accountActs';


const initialState = {
  loading: true,
  logged: false,
  registerError: '',
  loginError: '',
  user: null,
  accessToken: null,
  error: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        user: payload.user
      };

    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };

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
        logged: true,
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
        ...initialState,
        loading: false,
      };

    default:
      return state;
  }
};

export default user;
