import React from 'react';
import './App.css';
import Simulator from './Simulator';
import TexasMap from './components/TexasMap';
import Parameters from './components/Parameters';
import IncrementDecrement from './components/IncrementDecrement';

function App() {
  return (
    <div className="App">

      <TexasMap />
        <div>
          <Parameters/>   
        </div>

      <h1>Increment</h1>
      <IncrementDecrement />
    </div>
  );
}

export default App;
