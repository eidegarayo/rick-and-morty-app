import userService from '../../services/api/userService';

export const USER_BEGIN = 'USER_BEGIN';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_REMOVE = 'USER_REMOVE';

const userBegin = () => ({ type: USER_BEGIN });

const userSuccess = user => ({
  type: USER_SUCCESS,
  user
});

const userFailure = error => ({
  type: USER_FAILURE,
  error
});

const getUser = () => (dispatch) => {
  dispatch(userBegin());

  userService.getUserById((err, res) => {
    console.log("🚀 ~ file: userActs.js ~ line 24 ~ userService.getUserById ~ res", res)
    console.log("🚀 ~ file: userActs.js ~ line 24 ~ userService.getUserById ~ err", err)
    if (res?.success) return dispatch(userSuccess(res.user));
    return dispatch(userFailure(err.message));
  });
};

const removeUser = () => (dispatch) => {
}

const userActs = {
  userSuccess,
  getUser,
  removeUser,
};

export default userActs;
