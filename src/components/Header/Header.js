import React, { useState } from 'react';
import './Header.css';
import epiengage_logo_darkblue from './epiengage_logo_darkblue.jpg';
import RegularView from '../../RegularView';
import DashboardView from '../../DashboardView';
import GalleryView from '../GalleryView';
import UserGuideView from '../UserGuideView';
import ScreenshotView from '../ScreenshotView';
import TestView from '../TestView';

const Header = ({ currentIndex, setCurrentIndex }) => {
  const [activeTab, setActiveTab] = useState('regular');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'regular':
        return <RegularView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>;
      case 'dashboard':
        return <DashboardView />;
      case 'gallery':
        return <GalleryView />;
      case 'userguide':
        return <UserGuideView />;
      case 'screenshot':
        return <ScreenshotView />;
      default:
        return <RegularView currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>;
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img src={epiengage_logo_darkblue} alt="EpiEngage Logo" className="logo" />
        </div>
        <div className="text-container">
          <h1>epiENGAGE</h1>
        </div>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'regular' ? 'active' : ''}`}
            onClick={() => setActiveTab('regular')}
          >
            Map View
          </button>
          <button
            className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button
            className={`tab-button ${activeTab === 'userguide' ? 'active' : ''}`}
            onClick={() => setActiveTab('userguide')}
          >
            User Guide
          </button>
        </div>
        <div className="text-container">
          <h1>Flu Simulator</h1>
        </div>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Header;
