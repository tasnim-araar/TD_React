import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { addEvent } from "../service/api";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    name: "",
    description: "",
    price: "",
    nbTickets: "",
    nbParticipants: 0,
    like: false
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEvent(event);
    navigate("/events");
  };

  return (
    <Container className="mt-4">
      <h2>Add Event</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tickets</Form.Label>
          <Form.Control name="nbTickets" type="number" onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" className="mt-3">
          Add Event
        </Button>
      </Form>
    </Container>
  );
};

export default AddEvent;