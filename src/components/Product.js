import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productsArr } from "../utils/constants";
import "./Product.css";

const Product = () => {
  const param = useParams();

  return (
    <Container>
      <Row>
        <Col className="d-flex p-4">
          <section className="prod-images m-2">
            <img className="sidebarimg" alt="url" src={productsArr[param.id].imageUrl}></img>
            <img className="sidebarimg" alt="url" src={productsArr[param.id].imageUrl}></img>
            <img className="sidebarimg" alt="url" src={productsArr[param.id].imageUrl}></img>
            <img className="sidebarimg" alt="url" src={productsArr[param.id].imageUrl}></img>
          </section>
          <section className="p-4">
            <img alt="url" src={productsArr[param.id].imageUrl}></img>
            <p>Price:{productsArr[param.id].price}</p>
          </section>
        </Col>
        <Col className="d-flex p-4 ">
          <p>Reviews:</p>
          <ul>
            <li>Review 1</li>
            <li>Review 1</li>
            <li>Review 1</li>
            <li>Review 1</li>
            <li>Review 1</li>
          </ul>
          </Col>
      </Row>
    </Container>
  );
};

export default Product;
