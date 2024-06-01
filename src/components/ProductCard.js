import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../utils/CartContext";
import { crudcrudapi } from "../utils/constants";
const ProductCard = (props) => {
  const cartContext = useContext(CartContext);
  const addItemOnClick =async (e) => {
    e.preventDefault();
    const elem = {
      title: props.title,
      price: props.price,
      imageURL: props.imageUrl,
      count:1
    };
    cartContext.addCartItems(elem);
    
  
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.imageUrl} />
        <div className="mt-4 d-flex justify-content-around">
          <Card.Text>${props.price}</Card.Text>
          <Button variant="primary" onClick={addItemOnClick}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
