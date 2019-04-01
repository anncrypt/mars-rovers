// import './App.css';
import styled from 'styled-components';
import React, { Component } from 'react';

import Map from './components/Map';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <MapWrapper>
          <Map />
        </MapWrapper>
        <Controls />
      </StyledApp>
    );
  }
}

// STYLED COMPONENTS
const StyledApp = styled.div`
  color: blue;
  font-size: 62.5%;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  font-weight: normal;

  height: calc(100vh - 2px);

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
// const ErrorMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: tomato;
// `;


export default App;
