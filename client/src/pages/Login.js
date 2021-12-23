import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from '../components';
import {
  Header,
  Main,
  Footer,
} from '../components';

import authActs from '../redux/actions/accountActs';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.account.logged);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(authActs.login(username, password));
  }

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  return (
    <Main>
      <Container maxWidth padding="20px" margin="50px auto">
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
      </Container>
    </Main>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
