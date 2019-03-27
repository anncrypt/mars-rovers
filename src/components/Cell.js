import React, { Component } from 'react';
import styled from 'styled-components';

class Cell extends Component {
  render() {
    return (
      <StyledCell>
        <SuperSmallText>{this.props.x}-{this.props.y}</SuperSmallText>
      </StyledCell>
    );
  }
}

// STYLED COMPONENTS
const StyledCell = styled.div`
  border-right: 1px solid rgba(102, 51, 153, 0.5);
  ${'' /* border-right: 0.5px solid rgba(102, 51, 153, 0.6); */}
  height: 20px;
  width: 20px;

`;

const SuperSmallText = styled.p`
  font-size: 0.1rem;
`;

export default Cell;