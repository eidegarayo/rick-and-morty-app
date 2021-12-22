const add = ({ authToken, userId }) => {
  if (isClient && 'localStorage' in window && window.localStorage !== null) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userId', userId);
  }
};

const get = () => {
  if (localStorage.authToken && localStorage.userId) {
    sessionData.authToken = localStorage.authToken;
    sessionData.userId = localStorage.userId;
    return sessionData;
  }
};
