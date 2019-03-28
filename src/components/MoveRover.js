import styled from 'styled-components';
import React, { Component } from 'react';

class MoveRover extends Component {
  render() {
    return (
      <StyledMoveRover>
        <StyledHeading>Move Rover</StyledHeading>
        <h3>Rotate</h3>
        <StyledButton>L</StyledButton>
        <StyledButton>R</StyledButton>
        <h3>Move Forward</h3>
        <StyledButton>GO !</StyledButton>
      </StyledMoveRover>
    );
  }
}

// STYLED COMPONENTS
const StyledMoveRover = styled.div`
  ${'' /* border: 1px solid blue; */}
  padding: 1rem;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  font-size: 1.2rem;
  color: blue;
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
`;

export default MoveRover;