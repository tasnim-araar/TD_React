import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../events.json";
import { Container, Card } from "react-bootstrap";

const EventDetails = () => {
  const { eventName } = useParams();

  const event = eventsData.find(
    (e) => e.name === eventName
  );

  if (!event) return <h2 className="text-center mt-5">Event not found</h2>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price} DT</Card.Text>
          <Card.Text>Tickets: {event.nbTickets}</Card.Text>
          <Card.Text>Participants: {event.nbParticipants}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;
