import styled from 'styled-components';
import React, { Component } from 'react';

import SelectRover from './SelectRover';
import LandRover from './LandRover';
import MoveRover from './MoveRover';

class Controls extends Component {
  render() {
    return (
      <StyledControls>
        <SelectRover />
        <LandRover />
        <MoveRover />
      </StyledControls>
    );
  }
}

// STYLED COMPONENTS
const StyledControls = styled.div`
  border-left: 1px solid blue;
  ${'' /* padding: 1rem; */}
`;

export default Controls;