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


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, registerError } = useSelector((state) => state.account);
  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [errorRegister, setErrorRegister] = useState(registerError);

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  useEffect(() => {
    setErrorRegister(registerError);
  }, [registerError]);

  const onChange  = (path, value) => {
    setErrors({ ...errors, [path]: ''});
    setErrorRegister('');
    setUserData({...userData, [path]: value});
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    const newErrors = { username: '', password: '' };
    if (username && password) {
      dispatch(authActs.register(username, password));
    }
    else {
      if (!username) newErrors.username = 'Required field';
      if (!password) newErrors.password = 'Required field';
    }
    setErrors(newErrors);
  };

  return (
    <Main center>
      <Container contentWidth padding="20px" margin="50px auto">
        <Container padding="30px" margin="0 auto" backgroundColor="#fff" direction="column" maxWidth="500px">
          <H2>Create an account</H2>
          <ErrorText>{errorRegister ? 'Username already taken' : ''}</ErrorText>
          <form onSubmit={handleRegister}>
            <Input
              type="text"
              value={userData.username}
              placeholder="username"
              onChange={(e) => onChange('username', e.target.value)}
              error={errors.username}
            />
            <br />
            <Input
              type="password"
              value={userData.password}
              placeholder="password"
              onChange={(e) => onChange('password', e.target.value)}
              error={errors.password}
            />
            <Button type="submit">REGISTER</Button>
          </form>
          <Text>Have already an account?</Text>
          <LinkButton>
            <Link to="/login">
              Login here
            </Link>
          </LinkButton>
        </Container>
      </Container>
    </Main>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
