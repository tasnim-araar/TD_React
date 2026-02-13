import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

// Lazy loading
const Events = React.lazy(() => import("./components/Events"));
const EventDetails = React.lazy(() => import("./components/EventDetails"));
const NotFound = React.lazy(() => import("./components/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Events /> },
      { path: "event/:eventName", element: <EventDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
