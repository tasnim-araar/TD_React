import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const navigate = useNavigate();

  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>

          <Button
            variant="dark"
            onClick={() => navigate(`/event/${event.id}`)}
          >
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;