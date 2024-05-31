// src/components/MapView.js
import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import ILIView from './ILIView';
import InfectedView from './InfectedView';
import AntiviralsView from './AntiviralsView';
import VaccineView from './VaccineView';
import countyInfectedData from '../countyInfectedData';
import './MapView.css';

const MapView = () => {
    const [view, setView] = useState('ili');
  
    const handleButtonClick = (selectedView) => {
      setView(selectedView);
    };
  
    return (
      <div>
        <div className="button-group">
          <button className={`view-button ${view === 'ili' ? 'active' : ''}`} onClick={() => handleButtonClick('ili')}>ILI View</button>
          <button className={`view-button ${view === 'infected' ? 'active' : ''}`} onClick={() => handleButtonClick('infected')}>Infected</button>
          <button className={`view-button ${view === 'antivirals' ? 'active' : ''}`} onClick={() => handleButtonClick('antivirals')}>Antivirals Stockpile</button>
          <button className={`view-button ${view === 'vaccines' ? 'active' : ''}`} onClick={() => handleButtonClick('vaccines')}>Vaccines Stockpile</button>
        </div>
        {/* Render the corresponding view based on the selected state */}
        {view === 'ili' && <ILIView />}
        {view === 'infected' && <InfectedView />}
        {view === 'antivirals' && <AntiviralsView />}
        {view === 'vaccines' && <VaccineView />}
      </div>
    );
  };
  
  export default MapView;