import React, { useState } from 'react';
import './InitialParametersPanel.css';

const InitialParametersPanel = () => {
  const [isInitialParamsOpen, setIsInitialParamsOpen] = useState(false);
  const [isInterventionsOpen, setIsInterventionsOpen] = useState(false);

  const openInitialParams = () => setIsInitialParamsOpen(true);
  const closeInitialParams = () => setIsInitialParamsOpen(false);

  const openInterventions = () => setIsInterventionsOpen(true);
  const closeInterventions = () => setIsInterventionsOpen(false);

  return (
    <div>
      <div className="panel-container">
        <button className="orange-button" onClick={openInitialParams}>Add Initial Parameters</button>
        <button className="orange-button" onClick={openInterventions}>Add Interventions</button>
      </div>

      {isInitialParamsOpen && (
        <div className="modal-overlay" onClick={closeInitialParams}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Initial Parameters</h2>
            <form className="form">
              <label>
                Parameter 1:
                <input type="text" name="param1" />
              </label>
              <label>
                Parameter 2:
                <input type="text" name="param2" />
              </label>
              <button type="button" onClick={closeInitialParams}>Submit</button>
            </form>
          </div>
        </div>
      )}

      {isInterventionsOpen && (
        <div className="modal-overlay" onClick={closeInterventions}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Interventions</h2>
            <form className="form">
              <label>
                Intervention 1:
                <input type="text" name="intervention1" />
              </label>
              <label>
                Intervention 2:
                <input type="text" name="intervention2" />
              </label>
              <button type="button" onClick={closeInterventions}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InitialParametersPanel;
