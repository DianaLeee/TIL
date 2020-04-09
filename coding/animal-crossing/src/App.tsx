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
      <StyledButton>HELLO</StyledButton>
    </div>
  );
};

export default App;
