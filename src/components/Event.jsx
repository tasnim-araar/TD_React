import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";

const Event = ({ event, buyEvent, toggleLike }) => {
  return (
    <Col md={4} className="mb-4">
      <Card style={{ height: "100%" }}>
        
        {/* Image */}
        <Card.Img
          variant="top"
          src={placeholder}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">

          {/* Nom cliquable vers EventDetails */}
          <Card.Title>
            <NavLink
              to={`/event/${event.name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {event.name}
            </NavLink>
          </Card.Title>

          {/* Description */}
          <Card.Text>{event.description}</Card.Text>

          {/* Prix */}
          <Card.Text>
            <strong>Price:</strong> {event.price} DT
          </Card.Text>

          {/* Tickets */}
          <Card.Text>
            <strong>Tickets:</strong>{" "}
            {event.nbTickets === 0 ? "Sold Out" : event.nbTickets}
          </Card.Text>

          {/* Participants */}
          <Card.Text>
            <strong>Participants:</strong> {event.nbParticipants}
          </Card.Text>

          {/* Boutons */}
          <div className="mt-auto d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={() => buyEvent(event.id)}
              disabled={event.nbTickets === 0}
            >
              Book an event
            </Button>

            <Button
              variant={event.like ? "danger" : "success"}
              onClick={() => toggleLike(event.id)}
            >
              {event.like ? "Dislike" : "Like"}
            </Button>
          </div>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;
