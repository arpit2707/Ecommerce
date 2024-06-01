import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container className="p-4">
        <Row className="p-4">
          <Col className="text-center metal-font">
            <h1>Home </h1>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>JUL 16</Col>
          <Col>DETROIT ,MI</Col>
          <Col>DTE ENERGY MUSIC THEATRE</Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-primary p-2">BUY TICKETS</Button>
          </Col>
          <hr className="mt-2"></hr>    
             </Row>
        
        <Row className="m-2">
          <Col>JUL 16</Col>
          <Col>DETROIT ,MI</Col>
          <Col>DTE ENERGY MUSIC THEATRE</Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-primary p-2">BUY TICKETS</Button>
          </Col>
          <hr className="mt-2"></hr>   
        </Row>
        <Row className="m-2">
          <Col>JUL 16</Col>
          <Col>DETROIT ,MI</Col>
          <Col>DTE ENERGY MUSIC THEATRE</Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn-primary p-2">BUY TICKETS</Button>
          </Col>
          <hr className="mt-2"></hr>   
        </Row>
        <Row className="m-2">
          <Col>JUL 16</Col>
          <Col>DETROIT ,MI</Col>
          <Col>DTE ENERGY MUSIC THEATRE</Col>
          <Col className="d-flex justify-content-end align-items-center">
            <Button className="btn-primary p-2">BUY TICKETS</Button>
          </Col>
          <hr className="mt-2"></hr>   
        </Row>
      </Container>
    </div>
  );
};

export default Home;
