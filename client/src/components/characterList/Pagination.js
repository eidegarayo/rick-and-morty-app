import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '..';

const Num = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #fff;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 30px;
  font-weight: 500; 
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.button`
  width: 50px;
  height: 50px;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: 30px;
  font-weight: 500; 
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


const Pagination = (props) => {
  const { page, totalPages, onChange } = props;

  return (
    <Container contentWidth justify="flex-end" margin="0 auto 50px auto">
      {
        page > 1 && (
          <Arrow onClick={() => onChange(page - 1)}>
            &lt;-
          </Arrow>
        )
      }
      <Num>
        {page}
      </Num>
      {
        totalPages > page && (
          <Arrow onClick={() => onChange(page + 1)}>
            -&gt;
          </Arrow>
        )
      }
    </Container>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;
