import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container, Skeleton, Img } from '..';

const SkeletonContainer = styled.div`
  border: 1px solid black;
`;

const ImageList = (props) => {
  const { images, isLoading } = props;
  const loadingItems = Array(6).fill('item');

  return (
    <Container contentWidth justify="center" margin="0 auto" padding="0 0 100px" minHeight="600px">
      {
        isLoading ? (
          loadingItems.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
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
