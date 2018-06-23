import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Feed from "./pages/feed";
import Register from "./pages/newUser"
import Profile from "./pages/profile"
import EditProfile from "./pages/editProfile"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/feed" component= {Feed}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/profile" component= {Profile}/>
          <Route exact path="/editProfile" component= {EditProfile}/>

        </Fragment>

      </Router>

  );
  }
  }

        
        
      

export default App;
