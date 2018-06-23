import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Landing from "./pages/landing/landing"
import Feed from "./pages/feed/feed";
import Register from "./pages/newUser/newUser"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component= {Landing}/>
          <Route exact path="/feed" component= {Feed}/>
          <Route exact path="/register" component= {Register}/>

        </Fragment>

      </Router>

  );
  }
  }

        
        
      

export default App;
