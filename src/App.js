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
import TimelineSlider from './components/TimelineSlider'; // Import the TimelineSlider component

const App = () => {
  // State variable to store the selected county
  // eslint-disable-next-line no-unused-vars
  const [selectedCounty, setSelectedCounty] = useState('');
  const [showForm, setShowForm] = useState(false); // Ensure useState is imported
  
  // Function to handle county selection
  const handleCountySelect = county => {
    setSelectedCounty(county);
  };

  const handleAddCases = data => {
    console.log('Initial Cases Data:', data);
    // Process the data or send it to the server
  };

  const toggleFormVisibility = () => {
    setShowForm(prevState => !prevState); // Use setShowForm to toggle form visibility
  };

  const [showParameters, setShowParameters] = useState(false);

  const handleToggleParameters = () => {
    setShowParameters(!showParameters);
  };

  const handleParametersSubmit = (parameters) => {
    console.log('Submitted Parameters:', parameters);
    // Here, you can add any logic to handle the submitted parameters
    // For example, you could save them to a state, send them to an API, etc.
    setShowParameters(false); // Hide the form after submission
  };

  const handleExitParameters = () => {
    setShowParameters(false);
  };


  const [selectedDay, setSelectedDay] = useState(0); // Start from day 0
  const totalDays = 30; // Total number of days

  const handleDayChange = (newDay) => {
    setSelectedDay(newDay);
  };

  

  return (
    <div className="App">
      <Header />  
      <div>
      <h1></h1>
      <div className="button-container">
      <button onClick={toggleFormVisibility}>
        {showForm ? 'Hide Initial Cases' : 'Add Initial Cases'}
      </button>
      {showForm && (
        <AddInitialCases counties={texasCounties} onSubmit={handleAddCases} />
      )}
      <button onClick={handleToggleParameters}>
        {showParameters ? 'Close Parameters' : 'Add Parameters'}
      </button>
      {showParameters && <Parameters onSubmit={handleParametersSubmit} />} 
      </div>
      </div>

      <div className="content">
      <TexasChoropleth countyData={countyInfectedData}/>
      <div className="parametersContainer">
      <Panel>
          <Parameters />
      </Panel>
      <CaseFatalityRate />
      </div>
      <CountyInfectedTable />
    </div>

    <h1></h1>
      <TimelineSlider totalDays={totalDays} selectedDay={selectedDay} onDayChange={handleDayChange} />

  </div>  
  );
};

export default App;