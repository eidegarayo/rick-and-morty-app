const add = ({ accessToken }) => {
  if (window && window.localStorage !== null) {
    localStorage.setItem('accessToken', accessToken);
    return true;
  }
  return false;
};

const get = () => {
  if (localStorage.accessToken) {
    const sessionData = {};
    sessionData.accessToken = localStorage.accessToken;
    return sessionData;
  }
  return false;
};

const remove = () => {
  if (localStorage.accessToken) localStorage.removeItem('accessToken');
  return true;
};

const session = {
  add,
  get,
  remove
};

export default session;
