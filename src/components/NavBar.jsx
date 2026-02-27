import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">ESPRIT Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-warning text-decoration-underline" : "text-white"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-warning text-decoration-underline" : "text-white"
              }
            >
              Events
            </Nav.Link>
          </Nav>

          <Button variant="warning" onClick={() => navigate("/add-event")}>
            Add New Event
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;