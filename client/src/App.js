import React from 'react';

import { Container } from './components';
import {
  Header,
  Main,
  Footer,
} from './components';
import Routes from './routes';

function App() { 
  return (
    <Container direction="column">
      <Header />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
