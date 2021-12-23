import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getHomeImages } from '../services/api/dataService';

import {
  Container,
  Main,
  ImageList,
} from '../components';

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 50px;
  margin-top: 50px;
  text-align: center;
`;


const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getHomeImages((err, res) => {
      if (res) {
        const newImages = res.slice(0, 8);
        setImages(newImages);
      }
    });
  }, []);

  return (
    <Main>
      <Container maxWidth padding="20px" margin="0 auto" direction="column">
        <Title>Rick & Morty Challenge</Title>
        <SubTitle>Login to see all characters and info</SubTitle>
      </Container>
      <ImageList images={images} />
    </Main>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
