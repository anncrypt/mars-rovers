import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  rotateRoverRight,
  rotateRoverLeft,
  moveRoverForward
} from '../actions';

const mapStateToProps = state => {
  return {
    // currentlySelectedRover: state.selectedRover,
    hasRoverBeenDestroyed: state.rovers[state.selectedRover].hasBeenDestroyed,
  };
};
const mapDispatchToProps = dispatch => ({
  rotateRoverRight: () => dispatch(rotateRoverRight()),
  rotateRoverLeft: () => dispatch(rotateRoverLeft()),
  moveRoverForward: () => dispatch(moveRoverForward()),
})

class MoveRover extends Component {
  render() {
    const isDisabled = this.props.hasRoverBeenDestroyed;
    return (
      <StyledMoveRover>
        <StyledHeading>Move Rover</StyledHeading>
        <StyledH3 isDisabled={isDisabled}>Rotate</StyledH3>
        <StyledButton 
          disabled={isDisabled}
          onClick={this.props.rotateRoverLeft}
        >L</StyledButton>
        <StyledButton
          disabled={isDisabled}
          onClick={this.props.rotateRoverRight}
        >R</StyledButton>
        <StyledH3 isDisabled={isDisabled}>Move Forward</StyledH3>
        <StyledButton
          disabled={isDisabled}
          onClick={this.props.moveRoverForward}
        >GO !</StyledButton>

        { this.props.hasRoverBeenDestroyed && <StyledMessage>{`The rover is outside the plateau. It has been destroyed.`}</StyledMessage> }
      </StyledMoveRover>
    );
  }
}

// STYLED COMPONENTS
const StyledMoveRover = styled.div`
  padding: 1rem;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  text-align: left;
  font-size: 1.2rem;
  color: blue;
`;

const StyledH3 = styled.h3`
  font-weight: normal;

  ${props=>props.isDisabled ? 'color: grey' : ''}
`;

const StyledMessage = styled.p`
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0;
  border: 1px solid blue;
  padding: 0.5rem 1rem;
  margin: 0;
  margin-right: 1rem;
  color: blue;
  background: white;
  text-transform: uppercase;
  font-size: 1.2rem;

  ${props=>props.disabled ? DisabledButtonCSS : ''}
`;

const DisabledButtonCSS = css`
  color: grey;
  border: 1px solid grey;
`;

export default connect(mapStateToProps, mapDispatchToProps)(MoveRover);