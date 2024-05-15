import React, { useState } from 'react';

const CountyDropdown = ({ counties, onSelect }) => {
  const [selectedCounty, setSelectedCounty] = useState('');

  const handleChange = event => {
    const selectedValue = event.target.value;
    setSelectedCounty(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="county">Select a County: </label>
      <select id="county" value={selectedCounty} onChange={handleChange}>
        <option value="">Texas County</option>
        {counties.map(county => (
          <option key={county} value={county}>
            {county}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountyDropdown;
