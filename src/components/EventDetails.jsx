import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getallEvents } from "../service/api";
import { Container, Card } from "react-bootstrap";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const result = await getallEvents(id);
      setEvent(result.data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setEvent(null);
    }
  };

  if (!event) {
    return <h2 className="text-center mt-5">Event does not exist</h2>;
  }

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