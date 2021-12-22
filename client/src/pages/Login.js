import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { login } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { user, accessToken } = await login(username, password);
    if (accessToken) localStorage.setItem('user', JSON.stringify(accessToken));
    setLoading(false);
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
