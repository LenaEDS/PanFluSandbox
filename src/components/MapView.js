import React from 'react';
import Parameters from './Parameters';
import texasCounties from './counties';
import CaseFatalityRate from './CaseFatalityRate';
import CountyInfectedTable from './CountyInfectedTable';
import AddInitialCases from './AddInitialCases';
import Collapsible from './Collapsible';
import Antivirals from './Antivirals';
import Vaccine from './Vaccine';
import ToggleMapView from './Views/ToggleMapView';
import ChartSettings from './ChartSettings';
import InitialParametersPanel from './InitialParametersPanel';
import SetParametersDropdown from '../SetParametersDropdown';
import EventMonitor from './EventMonitor';
import InfectedChart from './InfectedChart';
import CountyPopulationTable from './CountyPopulationTable';
import Interventions from '../Interventions';
import ChartParameters from './ChartParameters';
import OUTPUT_9 from './OUTPUT_9.json'
import TimelineSlider from './TimelineSlider';


const MapView = ({ currentIndex, setCurrentIndex }) => {
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

export default MapView;