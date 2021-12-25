import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Container,
  Main,
  Input,
  Button,
} from '../components';

import authActs from '../redux/actions/accountActs';

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const Text = styled.p`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const LinkButton = styled.span`
  padding: 5px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-decoration: none;
  }
`;


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
                CREATE NEW
              </Link>
            </LinkButton>
        </Container>
      </Container>
    </Main>
  );
};

export default Login;
