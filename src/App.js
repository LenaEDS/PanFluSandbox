import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Parameters from './components/Parameters';
import Panel from './components/Panel';
import texasCounties from './components/counties'
import CountyDropdown from './components/CountyDropdown';
import CaseFatalityRate from './components/CaseFatalityRate';
import TexasChoropleth from './components/TexasChoropleth';
import CountyInfectedTable from './components/CountyInfectedTable';
import Header from './components/Header/Header'
import "./index.css"
import AddInitialCases from './components/AddInitialCases';
import TimelineSlider from './components/TimelineSlider'; // Import the TimelineSlider component
import Collapsible from './components/Collapsible';
import Tabs from './Tabs';
import InitialParametersPanel from './components/InitialParametersPanel';
import TestInitialCases from './TestInitialCases';
import TestParameters from './TestParameters';
import SetParametersDropdown from './SetParametersDropdown';
import ChartSettings from './components/ChartSettings';
import ChartParameters from './components/ChartParameters';

const App = () => {
  const [showInitialCases, setShowInitialCases] = useState(true);
  const [showParameters, setShowParameters] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0); // Start from day 0
  const [data, setData] = useState([]); // State to store fetched data
  const totalDays = 30; // Total number of days

  const handleToggleInitialCases = () => {
    setShowInitialCases(true);
    setShowParameters(false);
  };

  const handleToggleParameters = () => {
    setShowInitialCases(false);
    setShowParameters(true);
  };

  const handleDayChange = (newDay) => {
    setSelectedDay(newDay);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data?day=${selectedDay}`);
        console.log('Fetched data:', response.data); // Log fetched data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedDay]);

  return (
    <div className="App">
      <Header />
      <TimelineSlider totalDays={totalDays} selectedDay={selectedDay} onDayChange={handleDayChange} />
      <div>
      </div>
    </div>
  );
};

export default App;