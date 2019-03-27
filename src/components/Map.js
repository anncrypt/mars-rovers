import React, { Component } from 'react';
import Cell from './Cell';
import styled from 'styled-components';

class Map extends Component {

  constructor(props) {
    super(props);
    const template = [];
    for (let y = 0; y < 25; y++) {
      let row = [];
      for (let x = 0; x < 31; x++) {
        row.push([x, y]);
      }
      template.push(row);
    }

    this.state = {
      template,
    }
  }

  // generateRows = () => {
  //   for (let y = 0; y < 25; y++) {
  //     return (
  //       <MapRow>
  //         {this.generateColumns(y)}
  //       </MapRow>
  //     );
  //   }
  // }

  // generateColumns = (y) => {
  //   for (let x = 0; x < 31; x++) {
  //     return <Cell x={x} y={y} />
  //   }
  // }
  
  render() {
    return(
      <StyledMap>
        <Heading>Map</Heading>
        <Plateau>
          {/* { this.generateRows() } */}

          { this.state.template.map((row, i) => {
              return <MapRow key={`row-${i}`}>
                {
                  row.map((coords) => {
                    return <Cell 
                      // key={`cell-${coords[0]}-${coords[1]}`}
                      // x={coords[0]} 
                      // y={coords[1]}
                    />
                  })
                }
              </MapRow>
            })
          }
        </Plateau>
      </StyledMap>
    );
  }
}

// STYLED COMPONENTS
const StyledMap = styled.div`

`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  font-size: 0.05px;
  color: blue;
`;

const MapRow = styled.div`
  ${'' /* border: 1pz solid green; */}
  display: flex;
  border-bottom: 1px solid rgba(102, 51, 153, 0.5);

`;

const Plateau = styled.div`
  border-left: 1px solid rgba(102, 51, 153, 0.5);
  border-top: 1px solid rgba(102, 51, 153, 0.5);

  display: flex;
  flex-direction: column-reverse;
`;

export default Map;