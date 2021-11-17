import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hook, setHook] = useState(123); // 123 

  
  // jsx 
  return (
    <div className="App" style={{ backgroundColor: "red"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hook}
        </p>
        <p
          className="App-link"
          onClick={() => setHook(456)}
        >
          Learn React
        </p>
      </header>
    </div>
  );
}

export default App;
