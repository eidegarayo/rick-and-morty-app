import React from 'react';
import styled from 'styled-components/macro';

import { theme } from '../styledThemes';
import { Container } from '..';

const Footer = () => {
  return (
    <Container backgroundColor={theme.colors.footerBackgroundColor}>
      <Container maxWidth margin="0 auto" padding="50px 20px" justify="center">
        Enlace github
      </Container>
    </Container>
  )
}

export default Footer;
