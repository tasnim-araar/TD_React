import React, { useState, useEffect } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../events.json";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [showAlert, setShowAlert] = useState(false);

  // useEffect = cycle de vie (componentDidMount)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const buyEvent = (id) => {
    const eventToUpdate = events.find((e) => e.id === id);

    if (eventToUpdate.nbTickets === 0) return;

    const updatedEvents = events.map((event) =>
      event.id === id
        ? {
            ...event,
            nbParticipants: event.nbParticipants + 1,
            nbTickets: event.nbTickets - 1,
          }
        : event
    );

    setEvents(updatedEvents);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const toggleLike = (id) => {
    const updatedEvents = events.map((event) =>
      event.id === id ? { ...event, like: !event.like } : event
    );

    setEvents(updatedEvents);
  };

  return (
    <Container className="mt-4">
      {showAlert && (
        <Alert variant="info">You have booked an event</Alert>
      )}

      <Row>
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            buyEvent={buyEvent}
            toggleLike={toggleLike}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Events;
