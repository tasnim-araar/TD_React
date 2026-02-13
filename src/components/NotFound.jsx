import React from "react";
import { Container } from "react-bootstrap";
import notfound from "../assets/notfound.jfif";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <h2>404 - Page Not Found</h2>
      <img src={notfound} alt="Not Found" width="400" />
    </Container>
  );
};

export default NotFound;
