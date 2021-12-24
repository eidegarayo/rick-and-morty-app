import React from 'react';
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth, theme }) => maxWidth ? theme.mainContentWidth : 'none'};
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
    color,
    width = '100%',
    margin = '0',
    padding = '0',
    maxWidth,
    alignItems = '',
    gap = '0',
    wrap = 'wrap',
  } = props;

  return (
    <StyledContainer
      justify={justify}
      direction={direction}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      maxWidth={maxWidth}
      margin={margin}
      padding={padding}
      gap={gap}
      wrap={wrap}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  )
};

export default Container;
