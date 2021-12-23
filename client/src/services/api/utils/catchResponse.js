import session from './session';

const auth = (response, callback) => {
  const { data } = response;
  if (data.success) {
    console.log("🚀 ~ file: catchResponse.js ~ line 6 ~ auth ~ data", data)
    const { accessToken, user } = data;
    session.add({ accessToken, userId: user._id });
    callback(null, response.data);
  }
}

const api = (response, callback) => {
  const { data } = response;
  if (data.success) return callback(null, data);
  return callback(data, null);
}

const catchResponse = {
  auth,
  api,
};

export default catchResponse;
