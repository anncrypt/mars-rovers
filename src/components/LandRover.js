import styled from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import {
//   landRover,
// } from '../actions';

// const mapStateToProps = state => {
//   return {
//     currentlySelectedRover: state.selectedRover,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   selectRover: (selectedRover) => dispatch(selectRover(selectedRover))
// })

class LandRover extends Component {

  render() {
    return (
      <StyledSelectRover>
        <StyledHeading>Land Rover</StyledHeading>
        <div>
          <div>
            <label htmlFor="xcoord">X</label>
            <input id="xcoord" type="text"/>
          </div>
          <div>
            <label htmlFor="ycoord">Y</label>
            <input id="ycoord" type="text"/>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="direction">Direction</label>
            <input id="direction" type="text"/>
          </div>
        </div>
        <div>
          <StyledButton 
            onClick={() => {}}
          >
          Land
          </StyledButton>
        </div>
        
      </StyledSelectRover>
    );
  }
}


// STYLED COMPONENTS
const StyledSelectRover = styled.div`
  border-top: 1px solid blue;
  border-bottom: 1px solid blue;
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
  padding: 0.5rem 1.5rem;
  margin: 0;
  color: blue;
  background: white;
  text-transform: uppercase;
`;

export default LandRover;
// export default connect(mapStateToProps, mapDispatchToProps)(LandRover);