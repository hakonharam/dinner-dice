import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button.js'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button>Test Button</Button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
