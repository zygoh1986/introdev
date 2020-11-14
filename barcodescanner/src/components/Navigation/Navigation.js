/**
 * Navigation component - Created a responsive navigation bar using bootstrap. 
 */

import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom";
import './Navigation.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class Navigation extends Component {

  render() {
    return (
      <Fragment>
        <div className="mainNavbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar navbar-expand-lg">
          <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/Cart">
              Cart
            </NavLink>
          </li>
        </ul>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>
      </Fragment>
    )
  }
}

export default Navigation

