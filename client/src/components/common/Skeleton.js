import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyFrameSkeleton = keyframes`
  100% { transform: translateX(90%) }; 
`;

const SkeletonContainer = styled.div`
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: relative; 
  background-color: lightgrey;
  overflow: hidden;

  &::after {
    display: block; 
    content: ""; 
    position: absolute; 
    width: 100%; 
    height: 100%; 
    transform: translateX(-90%); 
    background: -webkit-gradient(
      linear, left top, right top,
      from(transparent),  
      color-stop(rgba(255, 255, 255, 0.5)), 
      to(transparent)); 
                          
    background: linear-gradient(
      90deg,
      transparent, 
      rgba(255, 255, 255, 0.5),
      transparent); 
       
    /* Adding animation */ 
    animation: ${keyFrameSkeleton} 1.5s infinite; 
  }
`;

const Skeleton = (props) => {
  const { width, height } = props;

  return (
    <SkeletonContainer
      width={width}
      height={height}
    />
  );
};


export default Skeleton;
