import styled, { css } from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  landRover,
} from '../actions';

const mapStateToProps = state => {
  return {
    currentlySelectedRover: state.selectedRover,
    hasRoverLanded: state.rovers[state.selectedRover].hasLanded,
    hasRoverBeenDestroyed: state.rovers[state.selectedRover].hasBeenDestroyed,
  };
};
const mapDispatchToProps = dispatch => ({
  landRover: (x, y, direction) => dispatch(landRover(x, y, direction)),
});

class LandRover extends Component {
  state = {
    x: 0,
    y: 0,
    direction: 'N'
  }

  handleChangeOfX = (e) => {
    let newVal = Number(e.target.value);
    if (isNaN(newVal)) {
      newVal = 0;
    }
    this.setState({
      x: newVal,
    })
  }

  handleChangeOfY = (e) => {
    let newVal = Number(e.target.value);
    if (isNaN(newVal)) {
      newVal = 0;
    }
    this.setState({
      y: newVal,
    })
  }

  handleChangeOfDirection = (e) => {
    this.setState({
      direction: e.target.value,
    })
  }

  render() {
    const isDisabled = this.props.hasRoverBeenDestroyed || this.props.hasRoverLanded;

    return (
      <StyledSelectRover isSectionDisabled={this.props.hasRoverLanded}>
        <StyledHeading isDisabled={isDisabled}>Land Rover</StyledHeading>
        <CoordRow>
          <StyledCoordWrapper>
            <StyledLabel htmlFor="xcoord" isDisabled={isDisabled}>X</StyledLabel>
            <StyledInput 
              disabled={isDisabled}
              onChange={this.handleChangeOfX}
              value={this.state.x}
              id="xcoord" type="text"/>
          </StyledCoordWrapper>
          <StyledCoordWrapper>
            <StyledLabel htmlFor="ycoord" isDisabled={isDisabled}>Y</StyledLabel>
            <StyledInput
              disabled={isDisabled}
              onChange={this.handleChangeOfY}
              value={this.state.y}
              id="ycoord" type="text"/>
          </StyledCoordWrapper>
        </CoordRow>
        <CoordRow>
          <StyledCoordWrapper>
            <StyledLabel htmlFor="direction" isDisabled={isDisabled}>Direction</StyledLabel>
            <StyledInput 
              disabled={isDisabled}
              onChange={this.handleChangeOfDirection}
              value={this.state.direction}
              id="direction" type="text"/>
          </StyledCoordWrapper>
        </CoordRow>
        <ButtonRow>
          <StyledButton 
            disabled={this.props.hasRoverLanded}
            onClick={() => { 
              const {
                x,
                y,
                direction
              } = this.state;
              this.props.landRover(x, y, direction);
              }}
          >
          Land
          </StyledButton>
        </ButtonRow>
        
      </StyledSelectRover>
    );
  }
}


// STYLED COMPONENTS
const StyledSelectRover = styled.div`
  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
  padding: 1rem;

  @media (max-width: 1140px) {
    width: 50%;
    border: none;
    border-right: 1px solid blue;
  }
`;

const CoordRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

const StyledCoordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-right: 20px;

  label {
    margin-bottom: 0.3rem;
    font-size: 0.8rem;
  }


  @media (max-width: 1140px) {
    width: 30%;
  }
`;

const StyledInput = styled.input`
  border: 1px solid blue;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: blue;

  ${props=>props.disabled ? DisabledInputCSS : ''}
`;

const DisabledInputCSS = css`
  color: grey;
  border: 1px solid grey;
`;

const StyledLabel = styled.label`
  ${props=>props.isDisabled ? 'color: grey' : ''};
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  text-align: left;
  font-size: 1.2rem;
  color: blue;

  ${props => props.isDisabled ? 'color: grey' : ''};
`;

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0;
  border: 1px solid blue;
  padding: 0.5rem 1.5rem;
  margin: 0;
  color: blue;
  background: white;
  text-transform: uppercase;
  font-size: 1.2rem;

  ${props => props.disabled ? DisabledButtonCSS : ''}
`;

const DisabledButtonCSS = css`
  color: grey;
  border: 1px solid grey;
`;

export default connect(mapStateToProps, mapDispatchToProps)(LandRover);