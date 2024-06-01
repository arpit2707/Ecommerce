import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="p-4">
      <Row className="p-4">
        <Col className="text-center">
          <h1 className="metal-font">About </h1>
        </Col>
      </Row>
      <Row className="mx-4 d-flex justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <img
            alt="aboutpage"
            src="https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg"
            className="w-50"
          />
        </Col>
        <Col xs={12} md={6}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            quae, incidunt quas dolorum illo nostrum nulla quod impedit
            suscipit rem, nobis cum ipsa vitae vero amet et. Laborum, eligendi
            omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fuga aspernatur perspiciatis recusandae dolorum velit placeat
            architecto eum consectetur! Cum blanditiis a sunt saepe adipisci,
            animi odio unde culpa autem! Praesentium esse sequi aut sint illum
            itaque fuga, nam delectus id! Blanditiis aspernatur deleniti quis
            incidunt exercitationem? Ipsa itaque placeat ab vitae.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
