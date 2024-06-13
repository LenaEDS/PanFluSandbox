import React from 'react';
import ShowcaseLayout from './ShowcaseLayout'; // adjust the path as necessary
import './ExampleLayout.css'; // Import custom CSS for styling

class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }

  render() {
    return (
      <div className="exampleLayoutContainer">
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">{this.stringifyLayout()}</div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

export default ExampleLayout;
