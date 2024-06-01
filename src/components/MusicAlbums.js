import React from "react";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './MusicAlbums.css'
import Button from 'react-bootstrap/Button';
import { productsArr } from "../utils/constants";
import { Link } from "react-router-dom";

const MusicAlbums = () => {


  return (
    <>
    <Container fluid className="p-3 pt-5  d-flex flex-column align-items-center main-container" >
      <h1 className="metal-font">Music</h1>
      <Row className="d-flex flex-wrap justify-content-center ">
        {productsArr.map((item, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-5 mx-5">
            <Link to={`/products/${index}`}><ProductCard title={item.title} price={item.price} imageUrl={item.imageUrl} /></Link>
          </Col>
        ))}
      </Row>
      <Button variant="primary" size="lg">
        See the cart
      </Button>
    </Container>
    
    </>
  );
};

export default MusicAlbums;
