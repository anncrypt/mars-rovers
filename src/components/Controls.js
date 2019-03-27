import React, { Component } from 'react';

import SelectRover from './SelectRover';
import LandRover from './LandRover';
import MoveRover from './MoveRover';

class Controls extends Component {
  render() {
    return (
      <div>
        <SelectRover />
        <LandRover />
        <MoveRover />
      </div>
    );
  }
}

export default Controls;