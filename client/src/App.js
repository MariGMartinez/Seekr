import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css";
import Profile from "./pages/profile"
import Navbar from "./components/navbar"
import EditProfile from "./pages/editProfile"
import Landing from "./pages/landing/landing"
import Feed from "./pages/feed/feed";
import Register from "./pages/newUser/newUser"
import Login from "./pages/login/login"


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          
          <Route exact path="/" component= {Landing}/>
          <Route exact path="/feed" component= {Feed}/>
          <Route exact path="/register" component= {Register}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component= {Profile}/>
          <Route exact path="/editProfile" component= {EditProfile}/>

        </Fragment>

      </Router>

  );
  }
  }

        
        
      

export default App;
