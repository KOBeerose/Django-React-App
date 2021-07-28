import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router.js";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
