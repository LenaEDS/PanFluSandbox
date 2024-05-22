import React, { useState } from 'react';
import './App.css';
import Parameters from './components/Parameters';
import Panel from './components/Panel';
import texasCounties from './components/counties'
import CountyDropdown from './components/CountyDropdown';
import CaseFatalityRate from './components/CaseFatalityRate';
import TexasChoropleth from './components/TexasChoropleth';
import CountyInfectedTable from './components/CountyInfectedTable';
import Header from './components/Header/Header'
import "./index.css"
import countyInfectedData from './components/countyInfectedData';
import AddInitialCases from './components/AddInitialCases';

const App = () => {
  // State variable to store the selected county
  // eslint-disable-next-line no-unused-vars
  const [selectedCounty, setSelectedCounty] = useState('');

  // Function to handle county selection
  const handleCountySelect = county => {
    setSelectedCounty(county);
  };

  const handleAddCases = data => {
    console.log('Initial Cases Data:', data);
    // Process the data or send it to the server
  };

  return (
    <div className="App">
      <Header />  
      <h1>Add Initial Cases</h1>
      <AddInitialCases counties={texasCounties} onSubmit={handleAddCases} />
      <div className="content">
      <TexasChoropleth countyData={countyInfectedData}/>
      <div className="parametersContainer">
      <Panel>
          <Parameters />
      </Panel>
      <CaseFatalityRate />
      </div>
      <div className="parametersContainer">
      <CountyInfectedTable />
      </div>

    </div>
  </div>  
  );
};

export default App;