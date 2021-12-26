import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: 100%;
    line-height:1.5;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: #fff;
    border: none;
    padding: 5px;
    cursor: pointer;
    opacity: 1;
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 1;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 100%;
    } 

`;

const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default Button;
