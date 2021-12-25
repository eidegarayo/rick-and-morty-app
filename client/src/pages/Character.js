import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Main,
  Container,
} from '../components';
import { getCharacter } from '../services/api/dataService';

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  list-style-image: url('/alien.svg');
  li {
    margin-bottom: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  min-height: 300px;
`;

const Character = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getCharacter(id, (err, res) => {
      if (res?.success) {
        setCharacter(res.data);
      }
      setIsLoading(false);
    });
  }, [id]);

  const { name, image, gender, species, status, type, created, origin, location, episode } = character;
  const formatedData = new Date(created).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Main>
      <Container maxWidth padding="20px" margin="0 auto" direction="column">
        <Title>{name}</Title>
        <Container margin="50px 0" gap="30px">
          <ImageContainer>
            <img src={image} alt={image} width="300px" height="300px" />
          </ImageContainer>
          <Ul>
            <li>
              <strong>Gender:</strong> {gender}
            </li>
            <li>
              <strong>Species:</strong> {species}
            </li>
            <li>
              <strong>Status:</strong> {status}
            </li>
            <li>
              <strong>Type:</strong> {type || 'unknown'}
            </li>
            <li>
              <strong>Created:</strong> {formatedData}
            </li>
            <li>
              <strong>Origin:</strong> {origin?.name}
            </li>
            <li>
              <strong>Location:</strong> {location?.name}
            </li>
            <li>
              <strong>Number of episodes:</strong> {episode?.length}
            </li>
          </Ul>
        </Container>
      </Container>
    </Main>
  );
};

Character.propTypes = {};

Character.defaultProps = {};

export default Character;
