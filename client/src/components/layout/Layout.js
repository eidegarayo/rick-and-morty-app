import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '..';
import Header from './Header';
import Footer from './Footer';


const Layout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
