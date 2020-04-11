import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "../pages/index";
import Menu from "../components/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          {/* 위치 주의! */}
          {/* params 사용하기 */}
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
