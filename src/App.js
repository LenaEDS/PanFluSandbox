import React from 'react';
import './App.css';
import TexasMap from './components/TexasMap';
import Parameters from './components/Parameters';
import IncrementDecrement from './components/IncrementDecrement';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Flu Simulator</h1>
    </header>
    <div className="content">
      <TexasMap />
      <div className="parametersContainer">
      <Panel>
          <Parameters />
      </Panel>
      <h2> Parameters </h2>
      <IncrementDecrement />
      </div>
    </div>
  </div>
  );
}

export default App;