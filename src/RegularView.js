import React from 'react';
import Parameters from './components/Parameters';
import texasCounties from './components/counties';
import CaseFatalityRate from './components/CaseFatalityRate';
import CountyInfectedTable from './components/CountyInfectedTable';
import AddInitialCases from './components/AddInitialCases';
import Collapsible from './components/Collapsible';
import Antivirals from './components/Antivirals';
import Vaccine from './components/Vaccine';
import ToggleMapView from './components/Views/ToggleMapView';
import ChartSettings from './components/ChartSettings';
import InitialParametersPanel from './components/InitialParametersPanel';
import SetParametersDropdown from './SetParametersDropdown';
import EventMonitor from './components/EventMonitor';
import InfectedChart from './components/InfectedChart';
import './RegularView.css';
import CountyPopulationTable from './components/CountyPopulationTable';
import Interventions from './Interventions';
import ChartParameters from './components/ChartParameters';
import OUTPUT_9 from './components/OUTPUT_9.json'
import TimelineSlider from './components/TimelineSlider';


const RegularView = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="regular-view-content">
      <SetParametersDropdown counties={texasCounties} />
      <Interventions />
      <div className="divider"></div> {/* Added divider here */}
      <div className="regular-view-collapsible-container">
        <div className="map-and-charts-container">
          <div className="map-and-table-container">
          <CountyInfectedTable className="infected-table" outputData={OUTPUT_9}/>
            <ToggleMapView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
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