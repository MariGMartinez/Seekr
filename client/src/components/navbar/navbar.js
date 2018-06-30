import React, { Component, Fragment } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.css'



class Navbars extends Component {
  render() {
    return (
      <Fragment>
        <Navbar href = "/feed" brand='Seekr' left >
          <NavItem href="/feed">Home</NavItem>
          <NavItem href="/search">Trail Search</NavItem>
          <NavItem href='/profile'>Profile</NavItem>
        </Navbar>
      </Fragment>
    )
  }
}


export default Navbars


