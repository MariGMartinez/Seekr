import React, { Component, Fragment } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './navbar.css'



class Navbars extends Component {
  render() {
    const navbarCSS = {
      background: {
        backgroundColor: "#203542"
      }
    }
    return (
      <Fragment>
        <Navbar style = {navbarCSS.background} href = "/feed" brand='Seekr' left >
          <NavItem href="/feed">Home</NavItem>
          <NavItem href="/search">Trail Search</NavItem>
          <NavItem href='/profile'>Profile</NavItem>
          <NavItem href='/currenthike'>Current Hike</NavItem>
          <NavItem href='/achievements'>Achievements</NavItem>
        </Navbar>
      </Fragment>
    )
  }
}


export default Navbars


