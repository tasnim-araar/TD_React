import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { getEventById } from "../service/api";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (err) {
        setEvent(null);
        console.error("Erreur récupération événement :", err);
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <Container className="mt-5">
        <h2>Événement non trouvé</h2>
        <Link to="/events">
          <Button variant="secondary">Retour à la liste</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img
          variant="top"
          src={event.image || "https://via.placeholder.com/800x400"}
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="mb-4">{event.title}</Card.Title>
          <Card.Text>
            <p><strong>Prix :</strong> {event.price} TND</p>
            <p><strong>Tickets :</strong> {event.nbTickets}</p>
            <p><strong>Participants :</strong> {event.nbParticipants}</p>
            {event.description && <p><strong>Description :</strong> {event.description}</p>}
          </Card.Text>
          <Link to="/events">
            <Button variant="secondary">Retour à la liste</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;