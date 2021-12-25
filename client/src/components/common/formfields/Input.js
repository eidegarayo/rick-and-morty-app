import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = styled.input`
  border: transparent;
  width: 100%;
  padding: 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height:1.5;
  border: 2px solid ${({ theme }) => theme.colors.greyText};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }
  margin-bottom: 20px;
`;

const Input = (props) => {
  const { type = 'text', value, onChange, placeholder } = props;

  return (
    <InputContainer
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
};

export default Input;
