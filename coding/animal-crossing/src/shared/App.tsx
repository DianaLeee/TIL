import React, { Component } from "react";
import "./App.css";
import Button from "../Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button theme="primary" width="100%">
          HELLO
        </Button>
        <Button theme="secondary">WORLD</Button>
      </div>
    );
  }
}

export default App;
