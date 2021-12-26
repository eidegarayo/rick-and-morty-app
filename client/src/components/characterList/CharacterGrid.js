import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from '..';
import Card from './Card';

const CharacterGrid = (props) => {
  const { characterList } = props;

  return (
    <Container maxWidth padding="50px 20px" margin="0 auto" gap="30px" minHeight="600px">
      {
        characterList?.length ? (
          <>
            {characterList.map((character) => <Card key={character.id} character={character} />)}
          </>
        ) : null
      }
    </Container>
  );
};

CharacterGrid.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

CharacterGrid.defaultProps = {};

export default CharacterGrid;
