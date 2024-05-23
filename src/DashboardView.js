import React, { useState } from 'react';
import CountyDropdown from './components/CountyDropdown';
import texasCounties from './components/counties'; // Import the counties data

const DashboardView = () => {
    const [selectedCounty, setSelectedCounty] = useState(null);
  
    const handleCountyChange = (selectedOption) => {
      setSelectedCounty(selectedOption);
    };
  
    return (
      <div className="dashboard-view">
        <h2>Dashboard View</h2>
        <CountyDropdown
          options={texasCounties} // Pass the counties data as options
          selectedOption={selectedCounty}
          onCountyChange={handleCountyChange} // Pass the handler function
        />
        {selectedCounty && (
          <div>
            <h3>Selected County: {selectedCounty.label}</h3>
          </div>
        )}
      </div>
    );
  };
  

export default DashboardView;
