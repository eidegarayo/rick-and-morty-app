import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';

import {
  Main,
  CharacterGrid,
  Pagination,
} from '../components';
import { getCharacterList } from '../services/api/dataService';

const CharacterList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const [characterList, setCharacterList] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const changePage = (num) => setSearchParams({ page: num });

  useEffect(() => {
    getCharacterList(page, (err, res) => {
      if (res?.success) {
        const { info, results } = res.data;
        setCharacterList(results);
        setTotalPages(info.pages);
      }
    });
  }, [page]); 

  return (
    <Main>
      <CharacterGrid characterList={characterList} />
      <Pagination page={parseInt(page, 10)} totalPages={totalPages} onChange={changePage} />
    </Main>
  );
};

CharacterList.propTypes = {};

CharacterList.defaultProps = {};

export default CharacterList;
