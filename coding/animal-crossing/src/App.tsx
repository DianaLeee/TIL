import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
`;
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledButton>HELLO</StyledButton>
      </header>
    </div>
  );
};

export default App;
