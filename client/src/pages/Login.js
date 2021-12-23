import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../components';
import {
  Header,
  Main,
  Footer,
} from '../components';

import authActs from '../redux/actions/authActs';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(authActs.login(username, password));
  }

  return (
      <Main>
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
      </Main>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
