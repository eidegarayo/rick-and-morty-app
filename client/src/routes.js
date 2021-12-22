import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default Router;
