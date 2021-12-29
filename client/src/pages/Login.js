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
  ErrorText,
} from '../components/common/formfields';

import authActs from '../redux/actions/accountActs';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logged, loginError } = useSelector((state) => state.account);
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [errorLogin, setErrorLogin] = useState(loginError);

  useEffect(() => {
    if (logged) navigate('/');
  }, [logged, navigate]);

  useEffect(() => {
    setErrorLogin(loginError);
  }, [loginError]);

  const onChange = (path, value) => {
    setErrors({ ...errors, [path]: '' });
    setErrorLogin('');
    setUserData({ ...userData, [path]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = userData;
    const newErrors = { username: '', password: '' };
    if (username && password) {
      dispatch(authActs.login(username, password));
    } else {
      if (!username) newErrors.username = 'Required field';
      if (!password) newErrors.password = 'Required field';
    }
    setErrors(newErrors);
  };

  return (
    <Main center>
      <Container contentWidth padding="20px" margin="50px auto">
        <Container padding="30px" margin="0 auto" backgroundColor="#fff" direction="column" maxWidth="500px">
          <H2>Please login to your account!</H2>
          <ErrorText>{errorLogin ? 'Incorrect username or password' : ''}</ErrorText>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={userData.username}
              placeholder="username"
              onChange={(e) => onChange('username', e.target.value)}
              error={errors.username}
            />
            <Input
              type="password"
              value={userData.password}
              placeholder="password"
              onChange={(e) => onChange('password', e.target.value)}
              error={errors.password}
            />
            <Button type="submit">LOG IN</Button>
          </form>
          <Text>Don&apos;t have an account?</Text>
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
