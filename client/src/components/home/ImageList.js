import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Skeleton } from '..';

const SkeletonContainer = styled.div`
  border: 1px solid black;
`;

const Img = (props) => {
  const { width, height } = props;
  const [isLoading, setIsLoading] = useState(true);
  const src = isLoading ? 'placeholder.jpeg' : props.src;
  const alt = isLoading ? '' : props.alt;

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      onLoad={() => setIsLoading(false)}
    />
  );
};

const ImageList = (props) => {
  const { images, isLoading } = props;
  const loadingItems = Array(6).fill('item');

  return (
    <Container maxWidth justify="center" margin="0 auto" padding="0 0 100px" minHeight="600px">
      {
        isLoading ? (
          loadingItems.map(() => (
            <SkeletonContainer>
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

ImageList.defaultProps = {};

export default ImageList;
