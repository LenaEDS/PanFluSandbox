// src/TestInitialCases.js

import React from 'react';

const TestInitialCases = ({ data }) => {
  console.log('Rendering TestInitialCases with data:', data); // Log data

  return (
    <div>
      <h2>Test Initial Cases</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.day}: {item.otherField}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestInitialCases;
