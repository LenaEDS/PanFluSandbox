import React from 'react';
import Parameters from './components/Parameters';
import texasCounties from './components/counties';
import CaseFatalityRate from './components/CaseFatalityRate';
import CountyInfectedTable from './components/CountyInfectedTable';
import AddInitialCases from './components/AddInitialCases';
import Collapsible from './components/Collapsible';
import Antivirals from './components/Antivirals';
import Vaccine from './components/Vaccine';
import MapView from './components/Views/MapView';
import ChartSettings from './components/ChartSettings';
import InitialParametersPanel from './components/InitialParametersPanel';
import './RegularView.css';

const RegularView = () => {
  return (
    <div className="regular-view-content">
      <InitialParametersPanel />
      <div className="regular-view-collapsible-container">
        <Collapsible title="Initial Cases">
          <AddInitialCases counties={texasCounties} />
        </Collapsible>
        <Collapsible title="Parameters">
          <Parameters />
        </Collapsible>
        <Collapsible title="Case Fatality Rate">
          <CaseFatalityRate />
        </Collapsible>
        <Collapsible title="Interventions">
          <Antivirals />
          <Vaccine />
        </Collapsible>
        <MapView />
        <CountyInfectedTable />
        <Collapsible title="Stratify">
          <ChartSettings counties={texasCounties} />
        </Collapsible>
      </div>
    </div>
  );
};

export default RegularView;
