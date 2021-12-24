import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import {
  Main,
} from '../components';
import { getCharacter } from '../services/api/dataService';

// created
// episode[]
// gender
// id
// image
// location { name, url }
// name
// origin { name, url }
// species
// status
// type
// url



const Character = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCharacter(id, (err, res) => {
      if (res?.success) {
        setCharacter(res.data);
      }
      setIsLoading(false);
    });
  }, [id]); 

  return (
    <Main>
      Character name: { character?.name }
    </Main>
  );
};

Character.propTypes = {};

Character.defaultProps = {};

export default Character;
