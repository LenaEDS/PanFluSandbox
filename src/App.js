import React, { useState } from 'react';
import './App.css';
import TexasMap from './components/TexasMap';
import Parameters from './components/Parameters';
import IncrementDecrement from './components/IncrementDecrement';
import Panel from './components/Panel';
import texasCounties from './components/counties'
import CountyDropdown from './components/CountyDropdown';
import CaseFatalityRate from './components/CaseFatalityRate';

const App = () => {
  // State variable to store the selected county
  // eslint-disable-next-line no-unused-vars
  const [selectedCounty, setSelectedCounty] = useState('');

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
      <CaseFatalityRate />
      </div>
    </div>
  </div>  
  );
};

export default App;