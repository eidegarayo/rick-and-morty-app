import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '..';

const ImageList = (props) => {
  const { images } = props;

  return (
    <Container justify="center" margin="0 0 100px">
      {
        images.map((img) => <img src={img} alt={img} width="300" height="300" />)
      }
    </Container>
  );
};

ImageList.propTypes = {};

ImageList.defaultProps = {};

export default ImageList;
