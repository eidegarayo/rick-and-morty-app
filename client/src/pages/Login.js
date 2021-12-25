import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { Container, Main } from '../components';
import {
  Button,
  Input,
  H2,
  Text,
  LinkButton,
} from '../components/common/formfields';

import authActs from '../redux/actions/accountActs';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.account.logged);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(authActs.login(username, password));
  }

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  return (
    <Main>
      <Container maxWidth padding="20px" margin="50px auto">
        <Container padding="30px" backgroundColor="#fff" direction="column">
          <H2>Please login to your account!</H2>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <Input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">LOG IN</Button>
          </form>
          <Text>Don't have an account?</Text>
          <LinkButton>
            <Link to="/register">
              Create new
            </Link>
          </LinkButton>
        </Container>
      </Container>
    </Main>
  );
};

export default Login;
