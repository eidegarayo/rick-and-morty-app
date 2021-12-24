import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../styledThemes/customTheme';
import { FavouriteIcon } from '../common/icons';
import userActs from '../../redux/actions/userActs';

const IconContainer = styled.div`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Favourite = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.user);
  const favourites = user?.favourites || [];

  const { id, width = '25px', height = '25px' } = props;
  const isFav = favourites.includes(id);

  const onClick = () => {
    const newFavourites = isFav
      ? favourites.filter((fav) => fav !== id)
      : [...favourites, id];
    dispatch(userActs.updateUser({ favourites: newFavourites }));
  };

  return (
    <IconContainer width={width} height={height} onClick={onClick}>
      <FavouriteIcon fill={isFav ? theme.colors.secondaryColor : theme.colors.lightGrey} />
    </IconContainer>
  );
};

Favourite.propTypes = {};

Favourite.defaultProps = {};

export default Favourite;
