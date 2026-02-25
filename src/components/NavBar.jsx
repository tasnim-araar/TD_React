import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

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

          <Nav.Link
            as={NavLink}
            to="/events"
            className={({ isActive }) =>
              isActive ? "text-warning text-decoration-underline" : ""
            }
          >
            Events
          </Nav.Link>
        </Nav>

        <Button variant="warning" onClick={() => navigate("/add-event")}>
          Add New Event
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;