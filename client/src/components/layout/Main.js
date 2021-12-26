import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  color: ${({ theme }) => theme.colors.greyText};
`;

const Main = (props) => {
  const { children } = props;

  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
