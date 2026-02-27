import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));
const AddEvent = React.lazy(() => import("./components/AddEvent"));
const UpdateEvent = React.lazy(() => import("./components/UpdateEvent")); // <-- Ajouté !
const NotFound = React.lazy(() => import("./components/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Events /> },
      { path: "events", element: <Events /> },
      { path: "events/:id", element: <EventDetails /> },
      { path: "update-event/:id", element: <UpdateEvent /> }, // <-- Ajouté !
      { path: "add-event", element: <AddEvent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);