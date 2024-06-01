import React, { useContext, useEffect, useState } from "react";
import CartContext from "../utils/CartContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/esm/Button";

const Cart = () => {
  const cartcontext = useContext(CartContext);
  const [cartElem, setcartElem] = useState([]);

  useEffect(() => {
    setcartElem(cartcontext?.cart);

  }, [cartcontext.cart]);

  return (
    <div>
      <Offcanvas
        show={cartcontext.show}
        onHide={() => cartcontext.toggleShow()}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1 className="metal font">Cart</h1>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                 
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cartElem?.map((item, index) => {
                  return (
                    <tr key={index+item.title}>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.count}</td>
                    </tr>
                  );
                })}
                Total: {cartcontext.total}
              </tbody>
            </table>
          </div>

<div className="mx-auto">
  <Button className="mt-3 ">Purchase</Button>
</div>
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
