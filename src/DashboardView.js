import React, { useState, useRef } from 'react';
import CountyDropdown from './components/CountyDropdown';
import texasCounties from './components/counties'; // Import the counties data
import TexasChoropleth from './components/TexasChoropleth';
import countyInfectedData from './components/countyInfectedData';
import html2canvas from 'html2canvas';
import ScreenshotView from './components/ScreenshotView';

const DashboardView = () => {
  const [selectedCounty, setSelectedCounty] = useState('');
  const mapRef = useRef(null);
  const [screenshots, setScreenshots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [screenshotName, setScreenshotName] = useState('');

  const texasCounties = [
    { value: 'harris', label: 'Harris County' },
    { value: 'dallas', label: 'Dallas County' },
    { value: 'travis', label: 'Travis County' },
    // Add more counties as needed
  ];

  const handleCountyChange = (selectedOption) => {
    setSelectedCounty(selectedOption);
  };

  const captureScreenshot = async () => {
    if (!mapRef.current) return;

    const canvas = await html2canvas(mapRef.current);
    const image = canvas.toDataURL('image/png');

    setScreenshots([...screenshots, { name: screenshotName, image }]);
    setShowModal(false);
    setScreenshotName('');
  };

  const handleSaveToGallery = () => {
    if (!mapRef.current) return;

    setShowModal(true);
  };

  return (
    <div className="dashboard-view">
      <h2>Dashboard View</h2>
      <CountyDropdown
        options={texasCounties}
        selectedOption={selectedCounty}
        onCountyChange={handleCountyChange}
      />
      {selectedCounty && (
        <div>
          <h3>Selected County: {selectedCounty}</h3>
        </div>
      )}

      <div style={{ position: 'relative' }}>
        <TexasChoropleth mapRef={mapRef} />
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: '100',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleSaveToGallery}
        >
          Save to Gallery
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter Screenshot Name:</h2>
            <input
              type="text"
              value={screenshotName}
              onChange={(e) => setScreenshotName(e.target.value)}
              placeholder="Enter screenshot name"
            />
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={captureScreenshot}>Save</button>
          </div>
        </div>
      )}

      <ScreenshotView screenshots={screenshots} />
    </div>
  );
};

export default DashboardView;