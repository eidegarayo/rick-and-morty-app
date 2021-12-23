import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  console.log("🚀 ~ file: Register.js ~ line 8 ~ Register ~ loading", loading)
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
  }

  console.log(process.env)

  return (
    <form onSubmit={handleRegister}>
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
      <button type="submit">Register</button>
    </form>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
