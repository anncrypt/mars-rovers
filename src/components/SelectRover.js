import styled, { css } from 'styled-components';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  selectRover,
} from '../actions';

const mapStateToProps = state => {
  return { 
    currentlySelectedRover: state.selectedRover,
  };
};
const mapDispatchToProps = dispatch => ({
  selectRover: (selectedRover) => dispatch(selectRover(selectedRover))
});

class SelectRover extends Component {

  render() {
    return (
      <StyledSelectRover>
        <StyledHeading>Select Rover</StyledHeading>
        <div>
          <StyledInput type="radio" name="rover" id="first" value="first"
          onChange={() => this.props.selectRover(0)}
          checked={this.props.currentlySelectedRover === 0} ></StyledInput>
          <StyledLabel 
            htmlFor="first"
            isSelected={this.props.currentlySelectedRover === 0}
            onClick={() => this.props.selectRover(0)}
          >1</StyledLabel>
          <StyledInput type="radio" name="rover" id="second" value="second"
            onChange={() => this.props.selectRover(1)}
          checked={this.props.currentlySelectedRover === 1} ></StyledInput>
          <StyledLabel 
            htmlFor="second"
            isSelected={this.props.currentlySelectedRover === 1}
            onClick={() => this.props.selectRover(1)}
          >2</StyledLabel>
          <StyledInput type="radio" name="rover" id="third" value="third" 
            onChange={() => this.props.selectRover(2)}
           checked={this.props.currentlySelectedRover === 2} ></StyledInput>
          <StyledLabel
            htmlFor="third"
            isSelected={this.props.currentlySelectedRover === 2}
            onClick={() => this.props.selectRover(2)}
          >3</StyledLabel>
          <StyledInput type="radio" name="rover" id="fourth" value="fourth"
            onChange={() => this.props.selectRover(3)}
          checked={this.props.currentlySelectedRover === 3} ></StyledInput>
          <StyledLabel 
            htmlFor="fourth"
            isSelected={this.props.currentlySelectedRover === 3}
            onClick={() => this.props.selectRover(3)}
          >4</StyledLabel>
        </div>
      </StyledSelectRover>
    );
  }
}


// STYLED COMPONENTS
const StyledSelectRover = styled.div`
  padding: 1rem;
  
  display: flex;
  flex-direction: column;

  @media (max-width: 1140px) {
    border-bottom: 1px solid blue;
  }
`;

const StyledHeading = styled.h2`
  text-align: left;
  font-size: 1.2rem;
  color: blue;
  font-weight: normal;
`;

const StyledInput = styled.input`
  display:none;
`;

const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 500;
  padding: 0 0.6rem;
  cursor: pointer;
  ${props => props.isSelected ? SelectedLabelStyles : ''}
`;

const SelectedLabelStyles = css`
  border-bottom: 2px solid blue;
`;

export default connect(mapStateToProps, mapDispatchToProps)(SelectRover);