// install 'react-icons' in project: npm install react-icons

import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const IncrementDecrement = () => {
  const [value, setValue] = useState(1);
  const [increment, setIncrement] = useState(0.1);

  const handleIncrement = () => {
    setValue(value + increment);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - increment);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px', width: '50px', border: '1px solid #ccc', padding: '5px' }}>
        {value.toFixed(1)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <MdKeyboardArrowUp onClick={handleIncrement} style={{ cursor: 'pointer' }} />
        <MdKeyboardArrowDown onClick={handleDecrement} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default IncrementDecrement;
