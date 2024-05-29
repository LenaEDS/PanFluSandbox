import React from 'react';
import RegularView from './RegularView';
import DashboardView from './DashboardView';

const Tabs = ({ activeTab }) => {
  const renderTabContent = () => {
    if (activeTab === 'regular') {
      return <RegularView />;
    } else if (activeTab === 'dashboard') {
      return <DashboardView />;
    }
  };

  return <div className="tab-content">{renderTabContent()}</div>;
};

export default Tabs;
