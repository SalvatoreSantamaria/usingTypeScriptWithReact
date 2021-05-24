import React from 'react';
import logo from './logo.svg';
import Header from './Header'
import './App.css';

function App() {
  return (
    <div className="App">

    {/* Interface 4: Error if not passing in props of type string */}
    {/* <Header /> */}
    {/* Pass in the button text correctly like below */}
    <Header buttonText="Click Me!" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
