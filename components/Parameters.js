// Parameters.js
import React from 'react';

class Parameters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parameters: {
        R0: '', // Reproduction Number
        latencyPeriod: '', // Latency Period
        asymptomaticPeriod: '', // Asymptomatic Period
        infectiousPeriod: '', // Infectious Period 
        caseFatalityRate: '',
        antiviralEffectiveness: '',
        antiviralAdherence: '',
        antiviralCapacity: '',
        vaccineEffectiveness: '',
        vaccineEffectivenessLag: '',
        vaccineAdherence: '',
        vaccineCapacity: ''

        // Add more parameters here
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      parameters: {
        ...prevState.parameters,
        [name]: value
      }
    }));
  }

  handleSubmit(event) {
    alert('Parameters submitted: ' + JSON.stringify(this.state.parameters));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Reproduction Number, R0:
          <input type="text" name="R0" value={this.state.parameters.R0} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Latency Period:
          <input type="text" name="latencyPeriod" value={this.state.parameters.latencyPeriod} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Asymptomatic Period:
          <input type="text" name="asymptomaticPeriod" value={this.state.parameters.asymptomaticPeriod} onChange={this.handleChange} />
        </label>
        
        {/* Add more parameter inputs */}
        <br />
        <label>
          Infectious Period:
          <input type="text" name="infectiousPeriod" value={this.state.parameters.infectiousPeriod} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Parameters;
