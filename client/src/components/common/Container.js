import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth, theme }) => (maxWidth ? theme.mainContentWidth : 'none')};
  min-height: ${({ minHeight }) => minHeight};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => wrap};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const Container = (props) => {
  const {
    children,
    justify = 'flex-start',
    direction = 'row',
    backgroundColor = 'none',
    width = '100%',
    margin = '0',
    padding = '0',
    maxWidth,
    alignItems = '',
    gap = '0',
    wrap = 'wrap',
    minHeight = '0',
  } = props;

  return (
    <StyledContainer
      justify={justify}
      direction={direction}
      backgroundColor={backgroundColor}
      width={width}
      maxWidth={maxWidth}
      minHeight={minHeight}
      margin={margin}
      padding={padding}
      gap={gap}
      wrap={wrap}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.string,
  direction: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  maxWidth: PropTypes.bool,
  alignItems: PropTypes.string,
  gap: PropTypes.string,
  wrap: PropTypes.string,
  minHeight: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  justify: 'flex-start',
  direction: 'row',
  backgroundColor: 'none',
  width: '100%',
  margin: '0',
  padding: '0',
  maxWidth: false,
  alignItems: '',
  gap: '0',
  wrap: 'wrap',
  minHeight: '0',
};

export default Container;
