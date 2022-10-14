import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

function MainNavbar(props) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Supamoose
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/fetch">
              Fetch
            </Nav.Link>
            {/* <NavDropdown title='Helpers' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/use-state-page'>
                useState
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          <div className="d-flex justify-content-end w-100">
            <Nav.Link
              className="btn btn-outline-info mr-2"
              as={Link}
              to="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="btn btn-outline-success"
              as={Link}
              to="/signup"
            >
              Signup
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
