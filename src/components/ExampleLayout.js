import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ShowcaseLayout from './ShowcaseLayout'; // Adjust path as necessary
import './ExampleLayout.css'; // Import custom CSS for styling
import TexasChoropleth from './TexasChoropleth'; // Import TexasChoropleth component

const ResponsiveGridLayout = WidthProvider(Responsive);

class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [
        { i: 'map', x: 0, y: 0, w: 4, h: 4 } // Initial layout for TexasChoropleth
      ],
      countyData: [] // Initialize county data state
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    // Simulate fetching county data (replace with your actual data fetching logic)
    setTimeout(() => {
      const mockCountyData = [
        { county: 'County A', infected: 100 },
        { county: 'County B', infected: 250 },
        // Add more counties as needed
      ];
      this.setState({ countyData: mockCountyData });
    }, 1000);
  }

  onLayoutChange(layout) {
    this.setState({ layout });
  }

  render() {
    const { countyData } = this.state;

    return (
      <div className="exampleLayoutContainer">
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">
            {this.state.layout.map((l) => (
              <div className="layoutItem" key={l.i}>
                <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
              </div>
            ))}
          </div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: this.state.layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          width={1200}
          draggableHandle=".dragHandle" // Specify a draggable handle if needed
          onLayoutChange={this.onLayoutChange}
        >
          {this.state.layout.map((item) => (
            <div key={item.i}>
              {item.i === 'map' ? (
                <div className="layoutItem" key={item.i}>
                  <TexasChoropleth
                    countyData={countyData}
                    key={item.i}
                    data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
                  />
                </div>
              ) : (
                <div className="placeholder" />
              )}
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    );
  }
}

export default ExampleLayout;
