import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'gatsby'

import Logo from './logo'

export default () => (
  <Navbar bg="white" expand="lg" variant="light" className="nav-down mediumnavigation">
    <Container className="pr-0">
      <Link className="navbar-brand" to="/">
        <Logo />
      </Link>
      <Navbar.Toggle aria-controls="navbarMediumish" />
      <Navbar.Collapse id="navbarMediumish">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link className="nav-link" to="/stories" activeClassName="active">Blog</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/tils" activeClassName="active">Today I Learned</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/projects" activeClassName="active">Projects</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/about" activeClassName="active">About Me</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
