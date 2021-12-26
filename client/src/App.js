import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Header,
  Container,
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
