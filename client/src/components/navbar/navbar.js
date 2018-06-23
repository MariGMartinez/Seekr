import React, { Component, Fragment } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.css'



class Navbars extends Component {
  render() {
    return (
      <Fragment>
        <Navbar brand='Seekr' left>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </Fragment>
    )
  }
}


export default Navbars


