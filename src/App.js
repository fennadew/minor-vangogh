import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddThemes from "./components/addThemes";
import Selection from "./components/Selection";
import detailTheme from "./components/detailTheme";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AddThemes} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/details/:name" component={detailTheme} />
        </div>
      </Router>
    );
  }
}

export default App;
