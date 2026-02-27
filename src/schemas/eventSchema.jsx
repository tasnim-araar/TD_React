// src/schemas/eventSchema.jsx
import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  price: z.number().nonnegative("Le prix doit être positif"),
  nbTickets: z.number().int().nonnegative("Le nombre de tickets doit être un entier positif"),
  nbParticipants: z.number().int().nonnegative("Le nombre de participants doit être >= 0"),
  image: z.string().url("L'URL de l'image n'est pas valide").optional(),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères").optional(),
});

// plus de 'export type Event = ...'
