import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Container,
  Header,
  Main,
  Footer,
} from '../components';

const Title = styled.h1`
  font-size: 100px;
`;


const Home = () => {
  return (
    <Main>
      <Container maxWidth padding="20px" margin="0 auto">
        <Title>Rick & Morty Challenge</Title>
      </Container>
    </Main>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
