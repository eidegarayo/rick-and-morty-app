import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiMsg, setApimsg] = useState('');

  useEffect(() => {
    console.log('useEffect')
    const callAPI = () => {
      fetch('http://localhost:8080/testAPI')
        .then(res => res.text())
        .then(res => setApimsg(res));
    }
    callAPI();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {apiMsg}
      </header>
    </div>
  );
}

export default App;
