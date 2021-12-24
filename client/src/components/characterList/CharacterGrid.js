import React from 'react';
import PropTypes from 'prop-types';

import {
  Container
} from '..';
import Card from './Card';

const CharacterGrid = (props) => {
  const { characterList } = props;

  return (
    <Container maxWidth padding="50px 20px" margin="0 auto" gap="30px">
      {
        characterList?.length ? (
          <>
            {characterList.map((character) => <Card character={character} />)}
          </>
        ) : 'Skeleton'
      }
    </Container>
  );
};

CharacterGrid.propTypes = {};

CharacterGrid.defaultProps = {};

export default CharacterGrid;
