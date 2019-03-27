import React, { Component } from 'react';
import Cell from './Cell';

class Map extends Component {
  render() {
    return(
      <div>
        <h1>Map</h1>
        <div className="plateau">
          <Cell />
        </div>
      </div>
    );
  }
}

export default Map;