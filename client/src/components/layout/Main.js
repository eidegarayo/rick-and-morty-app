import React from 'react';
import styled from 'styled-components/macro';

const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.mainBackgroundColor};
  color: ${props => props.theme.colors.greyText}
`;

const Main = (props) => {
  const { children } = props;

  return (
    <MainContainer>
      {children}
    </MainContainer>
  )
}

export default Main