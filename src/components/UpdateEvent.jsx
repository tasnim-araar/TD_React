import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { getEventById, updateEvent } from "../service/api";
import { eventSchema } from "../schemas/eventSchema";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(eventSchema),
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        if (eventData) {
          Object.keys(eventData).forEach((key) => setValue(key, eventData[key]));
        }
      } catch (err) {
        console.error("Erreur récupération événement :", err);
      }
    };
    fetchEvent();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      await updateEvent(id, data);
      navigate("/events");
    } catch (err) {
      alert("Erreur lors de la modification");
    }
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header><h3>Modifier l'événement</h3></Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control {...register("title")} isInvalid={!!errors.title} />
              <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Prix (TND)</Form.Label>
              <Form.Control
                type="number"
                {...register("price", { valueAsNumber: true })}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">{errors.price?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre de tickets</Form.Label>
              <Form.Control
                type="number"
                {...register("nbTickets", { valueAsNumber: true })}
                isInvalid={!!errors.nbTickets}
              />
              <Form.Control.Feedback type="invalid">{errors.nbTickets?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre de participants</Form.Label>
              <Form.Control
                type="number"
                {...register("nbParticipants", { valueAsNumber: true })}
                isInvalid={!!errors.nbParticipants}
              />
              <Form.Control.Feedback type="invalid">{errors.nbParticipants?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL de l'image (optionnel)</Form.Label>
              <Form.Control {...register("image")} isInvalid={!!errors.image} />
              <Form.Control.Feedback type="invalid">{errors.image?.message}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">Enregistrer les modifications</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateEvent;