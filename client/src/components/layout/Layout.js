import React from 'react';
import styled from 'styled-components';

import { Container } from '..';
import {
  Header,
  Footer,
} from './';

const Layout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
};

export default Layout;
