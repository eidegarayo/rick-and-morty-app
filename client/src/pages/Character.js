import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  Main,
  Container,
  Favourite,
} from '../components';
import { Title } from '../components/common/styledComponents';

import { getCharacter } from '../services/api/dataService';


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
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacter(id, (err, res) => {
      if (res?.success) {
        setCharacter(res.data);
      }
    });
  }, [id]);

  const {
    name,
    image,
    gender,
    species,
    status,
    type,
    created,
    origin,
    location,
    episode,
  } = character;
  const formatedData = new Date(created).toLocaleDateString(
    'en-US',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
  );

  return (
    <Main>
      <Container contentWidth padding="20px" margin="0 auto" direction="column" minHeight="600px">
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
          <Favourite id={parseInt(id, 10)} width="50px" height="50px" />
        </Container>
      </Container>
    </Main>
  );
};

export default Character;
