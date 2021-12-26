import React from 'react';
import { useSelector } from 'react-redux';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CharacterList from './pages/CharacterList';
import Character from './pages/Character';
import Page404 from './pages/Page404';
import { Container, Main } from './components';

const AuthRoute = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.account.logged);
  const isLoading = useSelector((state) => state.account.loading);
  if (isLoading) {
    return (
      <Main>
          <Container maxWidth padding="50px 20px" margin="0 auto" gap="30px" minHeight="600px" />

        </Main>
    );
  }
  if (!isLoading && !isLogged) {
    navigate('/');
    return null;
  }

  return children;
};

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="/character-list"
      element={
        <AuthRoute>
          <CharacterList />
        </AuthRoute>
      }
    />
    <Route
      path="/character/:id"
      element={
        <AuthRoute>
          <Character />
        </AuthRoute>
      }
    />

    <Route path="*" element={<Page404 />} />
  </Routes>
);

export default Router;
