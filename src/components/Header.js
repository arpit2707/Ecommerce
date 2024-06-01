import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import CartContext from "../utils/CartContext";
import Button from "react-bootstrap/Button";
import LoginContext from "../utils/LoginContext";
const Header = () => {
  const cartcontext = useContext(CartContext);
  const loginCtx = useContext(LoginContext);
  const toggleCartItem = (e) => {
    e.preventDefault();
    console.log("toggle");
    cartcontext.toggleShow();
  };

  console.log("show", cartcontext.show);

  return (
    <Nav
      className="justify-content-center bg-dark text-white p-2 metal-font"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="text-white" href="/">
          HOME
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" href="/store">
          STORE
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" href="/about">
          ABOUT
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" href="/login">
          {loginCtx.logins ? "LOGOUT" : "LOGIN"}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" href="/contactus">
          CONTACT US
        </Nav.Link>
      </Nav.Item>

      <div>
        <Button className="text-white" onClick={toggleCartItem}>
          CART {cartcontext.totalItems}
        </Button>
      </div>
    </Nav>
  );
};

export default Header;
