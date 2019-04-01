import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import IconRover from './svg/IconRover';

const mapStateToProps = state => {
  return {
    rovers: state.rovers,
  };
};
const mapDispatchToProps = dispatch => ({
  // selectRover: (selectedRover) => dispatch(selectRover(selectedRover))
})

class Cell extends Component {
  render() {
    return (
      <StyledCell>
        {this.props.roversAtCell !== null && this.props.roversAtCell.map((rover) => {
          return <IconRover 
            key={`cell-${this.props.x}-${this.props.y}-rover-${rover.index+1}`}
            roverNumber={rover.index+1}
            direction={rover.dir}
            />
        })}
      </StyledCell>
    );
  }
}

// STYLED COMPONENTS
const StyledCell = styled.div`
  border-right: 1px solid rgba(102, 51, 153, 0.5);
  height: 25px;
  width: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export default connect(mapStateToProps, mapDispatchToProps)(Cell);