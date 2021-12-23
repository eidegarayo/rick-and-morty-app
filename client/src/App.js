import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './components';
import {
  Header,
  Main,
  Footer,
} from './components';
import Routes from './routes';
import accountActs from './redux/actions/accountActs';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountActs.getUser());
  }, [dispatch]);

  return (
    <Container direction="column">
      <Header />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
