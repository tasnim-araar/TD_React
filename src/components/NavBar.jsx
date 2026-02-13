import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>ESPRIT Events</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className={({ isActive }) =>
              isActive ? "text-warning text-decoration-underline" : ""
            }
          >
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
