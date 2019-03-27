import styled from 'styled-components';

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
})


class SelectRover extends Component {

  render() {
    return (
      <StyledSelectRover>
        <Heading>Select Rover</Heading>
        <div>
          <input type="radio" id="first" name="drone" value="1"></input>
          <label htmlFor="first">First</label>
        </div>
        <button onClick={() => this.props.selectRover(0)}>1</button>
        <button onClick={() => this.props.selectRover(1)}>2</button>
        <button onClick={() => this.props.selectRover(2)}>3</button>
        <button onClick={() => this.props.selectRover(3)}>4</button>

        <div>Displaying currently selected rover index {this.props.currentlySelectedRover}</div>
      </StyledSelectRover>
    );
  }
}


// STYLED COMPONENTS
const StyledSelectRover = styled.div`
  border: 1px solid blue;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  color: blue;
`;
// const MainContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 85vh;
//   @media (max-width: 991px) {
//     height: 90vh;
//   }
// `;

export default connect(mapStateToProps, mapDispatchToProps)(SelectRover);