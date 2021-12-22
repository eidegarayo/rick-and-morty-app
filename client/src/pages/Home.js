import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Home = () => {
  const [apiMsg, setApimsg] = useState('');

  useEffect(() => {
    console.log('useEffect')
    const callAPI = () => {
      fetch('http://localhost:8080/testAPI')
        .then(res => res.text())
        .then(res => setApimsg(res));
    }
    callAPI();
  }, []);

  return (
    <h1>Home: {apiMsg}</h1>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
