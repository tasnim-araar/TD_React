import React, { useState, useEffect } from "react";
import { 
  Card, 
  Button, 
  Row, 
  Col, 
  Container, 
  Badge, 
  Spinner,
  Alert 
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllEvents, deleteEvent, updateEvent } from "../service/api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllEvents();
      setEvents(data || []);
    } catch (err) {
      console.error("Erreur récupération événements :", err);
      setError("Impossible de charger les événements. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cet événement ?")) return;
    
    try {
      await deleteEvent(id);
      setEvents(prev => prev.filter(event => event.id !== id));
    } catch (err) {
      alert("Erreur lors de la suppression");
      console.error(err);
    }
  };

  const handleBook = async (id, currentTickets) => {
    if (currentTickets <= 0) {
      alert("Désolé, plus de tickets disponibles !");
      return;
    }

    if (!window.confirm("Confirmez-vous la réservation d'un ticket ?")) return;

    const event = events.find(e => e.id === id);
    if (!event) return;

    const updatedEvent = {
      ...event,
      nbTickets: event.nbTickets - 1,
      nbParticipants: event.nbParticipants + 1,
    };

    try {
      await updateEvent(id, updatedEvent);
      setEvents(prev =>
        prev.map(e => (e.id === id ? updatedEvent : e))
      );
      alert("Réservation effectuée avec succès !");
    } catch (err) {
      alert("Erreur lors de la réservation");
      console.error(err);
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Chargement des événements...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
        <Button variant="outline-primary" onClick={loadEvents}>
          Réessayer
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Événements à venir</h2>
        <Badge bg="info" pill>
          {events.length} événement{events.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {events.length === 0 ? (
        <Alert variant="info" className="text-center py-4">
          Aucun événement programmé pour le moment...
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {events.map((event) => {
            const isSoldOut = event.nbTickets <= 0;
            const ticketsLeft = event.nbTickets;

            return (
              <Col key={event.id}>
                <Card className="h-100 shadow-sm border-0 hover-lift">
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={event.image || "https://via.placeholder.com/400x220?text=Événement"}
                      style={{ 
                        height: "220px", 
                        objectFit: "cover",
                        borderTopLeftRadius: "calc(0.375rem + 1px)",
                        borderTopRightRadius: "calc(0.375rem + 1px)"
                      }}
                    />
                    {isSoldOut && (
                      <Badge 
                        bg="danger" 
                        className="position-absolute top-0 end-0 m-3 fs-6 px-3 py-2"
                      >
                        COMPLET
                      </Badge>
                    )}
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-3 fw-bold">
                      {event.title}
                    </Card.Title>

                    <div className="mb-3 flex-grow-1">
                      <div className="d-flex align-items-center mb-2">
                        <Badge bg="warning" text="dark" className="me-2 px-3 py-2 fs-6">
                          {event.price} TND
                        </Badge>
                        <span className="text-muted">/ personne</span>
                      </div>

                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <strong>Tickets restants :</strong>
                        </div>
                        <Badge 
                          bg={ticketsLeft <= 5 ? "danger" : ticketsLeft <= 10 ? "warning" : "success"}
                          className="px-3"
                        >
                          {ticketsLeft}
                        </Badge>
                      </div>

                      <div className="d-flex justify-content-between">
                        <div>
                          <strong>Participants :</strong>
                        </div>
                        <span>{event.nbParticipants}</span>
                      </div>
                    </div>

                    <div className="d-flex gap-2 mt-auto flex-wrap">
                      <Link to={`/events/${event.id}`} className="flex-grow-1">
                        <Button 
                          variant="outline-primary" 
                          className="w-100"
                        >
                          Voir détails
                        </Button>
                      </Link>

                      <Button
                        variant={isSoldOut ? "outline-secondary" : "success"}
                        className="flex-grow-1"
                        onClick={() => handleBook(event.id, event.nbTickets)}
                        disabled={isSoldOut}
                      >
                        {isSoldOut ? "Complet" : "Réserver"}
                      </Button>

                      <Link to={`/update-event/${event.id}`}>
                        <Button variant="outline-warning">
                          <i className="bi bi-pencil"></i>
                        </Button>
                      </Link>

                      <Button 
                        variant="outline-danger"
                        onClick={() => handleDelete(event.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default Events;