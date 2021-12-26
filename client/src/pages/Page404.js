import React from 'react';
import styled from 'styled-components';

import {
  Container,
  Main,
} from '../components';

const Title = styled.h2`
  font-size: 200px;
  text-align: center;
`;

const Page404 = () => {
  return (
    <Main>
      <Container maxWidth padding="200px 20px" margin="0 auto" direction="column" height="100vh">
        <Title>404</Title>
      </Container>
    </Main>
  );
};

export default Page404;
