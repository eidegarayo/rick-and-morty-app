import { USER_BEGIN, USER_FAILURE, USER_SUCCESS, USER_REMOVE } from '../actions/userActs';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
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
        user: action.user
      };

    case USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case USER_REMOVE:
      return initialState;

    default:
      return state;
  }
};

export default user;
