import React, { useState } from 'react';
import PropTypes from 'prop-types';


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
      loading="lazy"
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

export default Img;
