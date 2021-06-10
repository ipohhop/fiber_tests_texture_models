// outer
import React from 'react';

// local
import './App.css';
import RootComponent from "./components/RootComponent";
import styled from "styled-components";


const Test = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`


function App() {
    return (
        <div className="App" style={{position:"relative"}}>

            <RootComponent/>

        </div>
    );
}

export default App;
