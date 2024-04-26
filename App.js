import React from 'react';
import './App.css';
import Simulator from './Simulator';
import TexasMap from './components/TexasMap';
import Parameters from './components/Parameters';

function App() {
  return (
    <div className="App">

      <TexasMap />
        <div>
          <Parameters/>   
        </div>
    </div>
  );
}

export default App;
