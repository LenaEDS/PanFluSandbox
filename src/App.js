import React, { useState } from 'react';
import './App.css';
import TexasMap from './components/TexasMap';
import Parameters from './components/Parameters';
import IncrementDecrement from './components/IncrementDecrement';
import Panel from './components/Panel';
import texasCounties from './components/counties'
import CountyDropdown from './components/CountyDropdown';

const App = () => {
  // State variable to store the selected county
  const [setSelectedCounty] = useState('');

  // Function to handle county selection
  const handleCountySelect = county => {
    setSelectedCounty(county);
  };

  return (
    <div className="App">
      <header>
        <h1>Flu Simulator</h1>
        <CountyDropdown counties={texasCounties} onSelect={handleCountySelect} />
      </header>
      <div className="content">
      <TexasMap />
      <div className="parametersContainer">
      <Panel>
          <Parameters />
      </Panel>
      <h3> Case Fatality Rate </h3>
        <label className="labelContainer">
        <span>0-4 years: </span>
        <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
        <span>5-24 years:</span>
        <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
        <span>25-49 years:</span>
        <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
        <span>50-64 years:</span>
        <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
        <span>65+ years: </span>
        <IncrementDecrement />
        </label>
      </div>
    </div>
  </div>  
  );
};

export default App;