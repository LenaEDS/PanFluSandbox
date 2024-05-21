import React, { useState } from 'react';
import Select from 'react-select';
import './CountyDropdown.css'; // Import the CSS file for styling

const CountyDropdown = ({ counties, onSelect }) => {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleChange = selectedOption => {
    setSelectedCounty(selectedOption);
    onSelect(selectedOption ? selectedOption.value : '');
  };

  // Prepare options in the format react-select expects
  const options = counties.map(county => ({
    value: county,
    label: county
  }));

  return (
    <div className="dropdown-container">
      <label htmlFor="county">Select a County: </label>
      <Select
        id="county"
        value={selectedCounty}
        onChange={handleChange}
        options={options}
        placeholder="Texas County"
        isClearable
        isSearchable
        className="county-select"
      />
    </div>
  );
};

export default CountyDropdown;
