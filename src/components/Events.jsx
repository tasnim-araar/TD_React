import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Event from "./Event";
import { getallEvents } from "../service/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await getallEvents();
    setEvents(result.data);
  };

  return (
    <Container className="mt-4">
      <Row>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </Row>
    </Container>
  );
};

export default Events;