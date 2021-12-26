import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
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
  const isLoading = useSelector((state) => state.account.loading);
  const isLogged = useSelector((state) => state.account.logged);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getHomeImages((err, res) => {
      if (res?.success) {
        const newImages = res.images.slice(0, 6);
        setImages(newImages);
      }
    });
  }, []);

  const getSubTitle = () => (isLogged ? 'Go to complete list' : 'Login to see all characters and info');

  return (
    <Main>
      <Container maxWidth padding="20px" margin="0 auto" direction="column">
        <Title>Rick & Morty Challenge</Title>
        <SubTitle>
          {isLoading ? null : getSubTitle()}
        </SubTitle>
      </Container>
      <ImageList images={images} />
    </Main>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
