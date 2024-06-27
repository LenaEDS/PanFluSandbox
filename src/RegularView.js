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
import SetParametersDropdown from './SetParametersDropdown';
import EventMonitor from './components/EventMonitor';
import InfectedChart from './components/InfectedChart';
import './RegularView.css';
import CountyPopulationTable from './components/CountyPopulationTable';
import Interventions from './Interventions';

const RegularView = () => {
  return (
    <div className="regular-view-content">
      <SetParametersDropdown counties={texasCounties} />
      <Interventions />
      <div className="divider"></div> {/* Added divider here */}
      <div className="regular-view-collapsible-container">
        <div className="map-and-charts-container">
          <div className="map-and-table-container">
            <CountyInfectedTable className="infected-table" />
            <MapView />
          </div>
          <div className="charts-container">
            <div className="chart-wrapper">
              <InfectedChart />
            </div>
            <div className="chart-wrapper">
              <EventMonitor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularView;