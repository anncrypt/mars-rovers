import styled from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectRover from './SelectRover';
import LandRover from './LandRover';
import MoveRover from './MoveRover';

const mapStateToProps = state => {
  return {
    // currentlySelectedRover: state.selectedRover,
    hasRoverBeenDestroyed: state.rovers[state.selectedRover].hasBeenDestroyed,
  };
};

class Controls extends Component {
  render() {
    return (
      <StyledControls>
        <SelectRover />
        <MobileRowWrapper>
          <LandRover />
          <MoveRover />
        </MobileRowWrapper>
        {this.props.hasRoverBeenDestroyed && <ErrorMessage>{`The rover is outside the plateau. It has been destroyed.`}</ErrorMessage>}
      </StyledControls>
    );
  }
}

// STYLED COMPONENTS
const StyledControls = styled.div`
  border-left: 1px solid blue;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`;

const MobileRowWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    border-bottom: 1px solid blue;
    width: 100%;
  }
`;

const ErrorMessage = styled.p`
  display: none;
  margin-left: 1rem;
  color: red;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default connect(mapStateToProps, null)(Controls);
