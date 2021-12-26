import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Skeleton } from '..';

const SkeletonContainer = styled.div`
  border: 1px solid black;
`;

const Img = (props) => {
  const { width, height, src, alt } = props;
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = isLoading ? 'placeholder.jpeg' : src;
  const imgAlt = isLoading ? '' : alt;

  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      height={height}
      width={width}
      onLoad={() => setIsLoading(false)}
    />
  );
};

Img.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const ImageList = (props) => {
  const { images, isLoading } = props;
  const loadingItems = Array(6).fill('item');

  return (
    <Container maxWidth justify="center" margin="0 auto" padding="0 0 100px" minHeight="600px">
      {
        isLoading ? (
          loadingItems.map((item, index) => (
            <SkeletonContainer key={index}>
              <Skeleton height="300px" width="300px" />
            </SkeletonContainer>
          ))
        ) : (
          images.map((img) => <Img key={img} src={img} alt={img} height="300" width="300" />)
        )
      }
    </Container>
  );
};

ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ImageList;
