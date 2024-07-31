import React from 'react';
import texasCounties from './counties';
import CountyInfectedTable from './CountyInfectedTable';
import ToggleMapView from './Views/ToggleMapView';
import SetParametersDropdown from './SetParametersDropdown';
import EventMonitor from './EventMonitor';
import InfectedChart from './InfectedChart';
import Interventions from './Interventions';
import OUTPUT_9 from './OUTPUT_9.json'
import TimelineSlider from './TimelineSlider';
import './HomeView.css';

const HomeView = ({ currentIndex, setCurrentIndex }) => {
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
            <div className="short-chart-wrapper">
              <EventMonitor />
            </div>
          </div>
        </div>
      </div>
      <TimelineSlider totalDays={OUTPUT_9.length} selectedDay={currentIndex} onDayChange={setCurrentIndex} />
    </div>
  );
};
export default HomeView;