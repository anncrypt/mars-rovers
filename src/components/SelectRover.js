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
      <StyledApp>
        <Heading>Select Rover</Heading>
        <button onClick={() => this.props.selectRover(0)}>1</button>
        <button onClick={() => this.props.selectRover(1)}>2</button>
        <button onClick={() => this.props.selectRover(2)}>3</button>
        <button onClick={() => this.props.selectRover(3)}>4</button>

        <div>Displaying currently selected rover index {this.props.currentlySelectedRover}</div>
      </StyledApp>
    );
  }
}


// STYLED COMPONENTS
const StyledApp = styled.div``;

const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
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