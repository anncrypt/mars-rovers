import React, { Component } from 'react';
import Cell from './Cell';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  NUMBER_HORIZONTAL_CELLS,
  NUMBER_VERTICAL_CELLS,
} from '../util/constants';


const mapStateToProps = state => {
  return {
    rovers: state.rovers,
    roversMoved: state.roversMoved,
    // currentlySelectedRover: state.selectedRover,
  };
};
const mapDispatchToProps = dispatch => ({
  // selectRover: (selectedRover) => dispatch(selectRover(selectedRover))
})

class Map extends Component {
  constructor(props) {
    super(props);
    const template = [];
    for (let y = 0; y < NUMBER_VERTICAL_CELLS; y++) {
      let row = [];
      for (let x = 0; x < (NUMBER_HORIZONTAL_CELLS+1); x++) {
        row.push([x, y]);
      }
      template.push(row);
    }

    this.state = {
      template,
    }
  }

  getRoversAtCoords = (x, y) => {
    // 
    let roversAtThisCell = [];
    // console
    this.props.rovers.forEach((rover, i) => {
      // console.log(rover);
      if (rover.hasLanded && rover.x === x && rover.y === y) {
        rover.index = i;
        roversAtThisCell.push(rover);
      }
    });

    if (roversAtThisCell.length > 0) {
      console.log('found at least one rover at this cell', x, y)
      return roversAtThisCell;
    }
    return null;
  }
  
  render() {
    return(
      <StyledMap>
        <StyledHeading>Map</StyledHeading>
        <Plateau>
          { this.state.template.map((row, i) => {
              return <MapRow key={`row-${i}`}>
                {
                  // find out if there is a rover at this coords
                  row.map((coords) => {
                    let roversAtCell = this.getRoversAtCoords(coords[0], coords[1])

                    return <Cell 
                      key={`cell-${coords[0]}-${coords[1]}`}
                      x={coords[0]} 
                      y={coords[1]}
                      roversAtCell={roversAtCell}
                    />
                  })
                }
              </MapRow>
            })
          }
        </Plateau>
        <StyledInvisible>{this.props.roversMoved }</StyledInvisible>
      </StyledMap>
    );
  }
}

// STYLED COMPONENTS
const StyledMap = styled.div`
  @media (max-width: 768px) {
      width: 100%;
      ${'' /* height: auto; */}
    }
`;

const StyledInvisible = styled.p`
  visibility: hidden;
`

const StyledHeading = styled.h2`
  font-weight: normal;
  color: blue;
  text-align: left;
  font-size: 1.4rem;
  padding-left: 1rem;
  
`;

const MapRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(102, 51, 153, 0.5);

`;

const Plateau = styled.div`
  border-left: 1px solid rgba(102, 51, 153, 0.5);
  border-top: 1px solid rgba(102, 51, 153, 0.5);

  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 768px) {
    width: 100%;
    ${'' /* height: auto; */}
  }
`;

// export default Map;
export default connect(mapStateToProps, mapDispatchToProps)(Map);