import session from './session';

const addHeaders = (authRequired) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (authRequired) {
    const sessionData = session.get();
    headers['x-access-token'] = sessionData.accessToken;
  }

  return headers;
};

export default addHeaders;
