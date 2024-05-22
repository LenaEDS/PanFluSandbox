import React, { useState } from 'react';
import './Parameters.css'; // Import the CSS file for styling

const Parameters = ({ onSubmit }) => {
  const [reproductionNumber, setReproductionNumber] = useState(2.5);
  const [latencyPeriod, setLatencyPeriod] = useState(5); // Default in days
  const [asymptomaticPeriod, setAsymptomaticPeriod] = useState(2); // Default in days
  const [infectiousPeriod, setInfectiousPeriod] = useState(7); // Default in days

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      reproductionNumber,
      latencyPeriod,
      asymptomaticPeriod,
      infectiousPeriod,
    });
  };

  return (
    <form className="parameters-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reproductionNumber">Reproduction Number (R0):</label>
        <input
          type="number"
          id="reproductionNumber"
          value={reproductionNumber}
          onChange={e => setReproductionNumber(parseFloat(e.target.value))}
          step="0.1"
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="latencyPeriod">Latency Period (days):</label>
        <input
          type="number"
          id="latencyPeriod"
          value={latencyPeriod}
          onChange={e => setLatencyPeriod(parseInt(e.target.value, 10))}
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="asymptomaticPeriod">Asymptomatic Period (days):</label>
        <input
          type="number"
          id="asymptomaticPeriod"
          value={asymptomaticPeriod}
          onChange={e => setAsymptomaticPeriod(parseInt(e.target.value, 10))}
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="infectiousPeriod">Infectious Period (days):</label>
        <input
          type="number"
          id="infectiousPeriod"
          value={infectiousPeriod}
          onChange={e => setInfectiousPeriod(parseInt(e.target.value, 10))}
          min="0"
          required
        />
      </div>

      <button type="submit">Submit Parameters</button>
    </form>
  );
};

export default Parameters;
