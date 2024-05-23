// src/Tabs.js
import React, { useState } from 'react';
import RegularView from './RegularView';
import DashboardView from './DashboardView';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('regular');

  const renderTabContent = () => {
    if (activeTab === 'regular') {
      return <RegularView />;
    } else if (activeTab === 'dashboard') {
      return <DashboardView />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'regular' ? 'active' : ''}`}
          onClick={() => setActiveTab('regular')}
        >
          Regular View
        </button>
        <button
          className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard View
        </button>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;
