import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../styledThemes/customTheme';
import { Container, Favourite, Img } from '..';

const ImageContainer = styled.div`
  width: 75px;
  height: 75px;
  border: 3px solid #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const NameText = styled.h3`
  margin-bottom: 30px;
  font-size: theme.fontSizes.large;
  color: #fff;
`;

const Ul = styled.ul`
  padding: 0;
  list-style: none;
  li {
    line-height: 1.5;
  }
`;

const LinkItem = styled.span`
  a {
    padding-bottom: 5px;
    border-bottom: 3px solid #fff;
    text-decoration: none;
    color: #fff;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  @media (min-width: ${theme.breakpoints.s}) {
    width: 47%;
  }
  @media (min-width: ${theme.breakpoints.md}) {
    width: 31%;
  }
`;

const Card = (props) => {
  const { character = {} } = props;
  const { id, image, name, species, status } = character;

  return (
    <CardContainer>
      <Container direction="column" backgroundColor={theme?.colors?.grey} padding="30px">
        <NameText>{name}</NameText>

        <Container wrap="nowrap" alignItems="center" gap="20px" margin="0 0 30px">
          <ImageContainer>
            <Img src={image} alt={image} width="70" height="70" />
          </ImageContainer>
          <Ul>
            <li><strong>Species:</strong> {species}</li>
            <li><strong>Status:</strong> {status }</li>
          </Ul>
        </Container>

        <Container justify="space-between">
          <LinkItem><Link to={`/character/${id}`}>LEARN MORE</Link></LinkItem>
          <Favourite id={id} />
        </Container>
      </Container>
    </CardContainer>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

Card.defaultProps = {};

export default Card;
