import React from 'react';
import IncrementDecrement from './IncrementDecrement';

const CaseFatalityRate = () => {
    return (
      <div>
        <h3> Case Fatality Rate </h3>
        <label className="labelContainer">
          <span>0-4 years: </span>
          <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
          <span>5-24 years:</span>
          <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
          <span>25-49 years:</span>
          <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
          <span>50-64 years:</span>
          <IncrementDecrement />
        </label>
        <br />
        <label className="labelContainer">
          <span>65+ years: </span>
          <IncrementDecrement />
        </label>
      </div>
    );
  };
  
  export default CaseFatalityRate;