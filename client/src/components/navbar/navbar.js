import React, { Component, Fragment } from 'react'

import './navbar.css'



class Navbar extends Component {
  render(){
    return(
      <Fragment>
      <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Seekr</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Home</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        

      </Fragment>
    )
  }
}


export default Navbar