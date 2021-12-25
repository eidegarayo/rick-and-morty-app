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


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.account.logged);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(authActs.register(username, password));
  }

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  return (
    <Main>
      <Container maxWidth padding="20px" margin="50px auto">
        <Container padding="30px" backgroundColor="#fff" direction="column">
          <H2>Create an account</H2>
          <form onSubmit={handleRegister}>
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
