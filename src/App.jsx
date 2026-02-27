import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";
import UpdateEvent from "./components/UpdateEvent";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/update-event/:id" element={<UpdateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;