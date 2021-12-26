import session from './session';

const auth = (error, callback) => {
  session.remove();
  return callback(error.message, null);
};

const api = (error, callback) => callback(error.message, null);

const catchResponse = {
  auth,
  api,
};

export default catchResponse;
