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
import Collapsible from './components/Collapsible';

const App = () => {
  const [showInitialCases, setShowInitialCases] = useState(true);
  const [showParameters, setShowParameters] = useState(false);

  const handleToggleInitialCases = () => {
    setShowInitialCases(true);
    setShowParameters(false);
  };

  const handleToggleParameters = () => {
    setShowInitialCases(false);
    setShowParameters(true);
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
      </div>

      <div className="content">
      <Collapsible title="Initial Cases">
        <AddInitialCases counties={texasCounties} />
      </Collapsible>
      <Collapsible title="Parameters">
        <Parameters />
      </Collapsible>
      <Collapsible title="Case Fatality Rate">
        <CaseFatalityRate />
      </Collapsible>
      <TexasChoropleth countyData={countyInfectedData}/>
      <CountyInfectedTable />
    </div>

    <h1></h1>
      <TimelineSlider totalDays={totalDays} selectedDay={selectedDay} onDayChange={handleDayChange} />

  </div>  
  );
};

export default App;