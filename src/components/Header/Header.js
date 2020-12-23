import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const authenticatedOptions = (
  <Fragment>
    <NavDropdown title="Recipes" class="collapsible-nav-dropdown">
      <NavDropdown.Item href="#recipes">View Recipes</NavDropdown.Item>
      <NavDropdown.Item href="#recipe-create">Make a New Recipe</NavDropdown.Item>
      <NavDropdown.Item href="#search">Generate Recipe</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Settings" class="collapsible-nav-dropdown">
      <NavDropdown.Item href="#change-password">Change Password</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="navbar" collapseOnSelect bg='dark' variant="dark" expand="md">
    <Navbar.Brand href="#">
      Kidz Kitchen
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
