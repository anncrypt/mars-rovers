// import './App.css';
import styled from 'styled-components';
import React, { Component } from 'react';

import Map from './components/Map';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <StyledApp>
        {/* <header className="App-header"> */}
        <Map />
        <Controls />
        {/* </header> */}
      </StyledApp>
    );
  }
}

// STYLED COMPONENTS
const StyledApp = styled.div`
  font-family: 'Roboto Mono', monospace;
`;
// const ErrorMessage = styled.p`
//   text-align: center;
//   font-size: 1.2rem;
//   color: tomato;
// `;


export default App;
