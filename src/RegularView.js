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
import Tabs from './Tabs';

const RegularView = () => {
  return (
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

  );
};

export default RegularView;
