const add = ({ accessToken, userId }) => {
  if (window && window.localStorage !== null) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', userId);
    return true;
  }
  return false;
};

const get = () => {
  if (localStorage.accessToken && localStorage.userId) {
    const sessionData = {};
    sessionData.accessToken = localStorage.accessToken;
    sessionData.userId = localStorage.userId;
    return sessionData;
  }
  return false;
};

const remove = () => {
  if (localStorage.accessToken) localStorage.removeItem('accessToken');
  if (localStorage.userId) localStorage.removeItem('userId');
  return true;
};

const session = {
  add,
  get,
  remove
};

export default session;
