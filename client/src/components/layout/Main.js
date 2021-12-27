import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  color: ${({ theme }) => theme.colors.greyText};
  min-height: ${({ theme }) => `calc(100vh - ${theme.headerHeight} - ${theme.footerHeight})`};
  align-items: ${({ center }) => (center ? 'center' : 'initial')};
`;

const Main = (props) => {
  const { children, center = false } = props;

  return (
    <MainContainer center={center}>
      {children}
    </MainContainer>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
};

Main.defaultProps = {
  center: false,
};

export default Main;
