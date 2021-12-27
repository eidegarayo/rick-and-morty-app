import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ErrorText } from './styled';

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const InputContainer = styled.input`
  border: transparent;
  width: 100%;
  padding: 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  line-height:1.5;
  border: 2px solid ${({ theme, error }) => (error ? theme.colors.error : theme.colors.greyText)};
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Input = (props) => {
  const { type = 'text', value, onChange, placeholder, error } = props;

  return (
    <FormGroup>
      <InputContainer
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
      <ErrorText>
        {error}
      </ErrorText>
    </FormGroup>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  error: '',
};

export default Input;
