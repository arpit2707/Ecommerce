import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Banner = () => {
  return (
    <Container fluid className="bg-secondary p-4 mt-1 pb-5" sticky="top">
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="text-white display-3 metal-font">
          THE GENERICS
        </Col>
      </Row>
    
    </Container>
  );
};

export default Banner;
