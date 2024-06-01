import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { firebaseLoginURL, firebaseSignUpURL } from "../utils/firebaseConstant";

import LoginContext from "../utils/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const loginCtx = useContext(LoginContext);

  const onClickLoginHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const formItems = {
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        };

        const setCredentails = await fetch(firebaseLoginURL, {
          method: "POST",
          body: JSON.stringify(formItems),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await setCredentails.json();

        if (setCredentails.ok) {
          console.log("login successful");
          console.log(data);
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("email", data.email);
          loginCtx.loginToken(data.idToken);
          setTimeout(() => {
            localStorage.clear();
            navigate("/login");
          }, 5000 * 5);
          navigate("/store");
        } else {
          throw new Error(data.error.message);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        const formItems = {
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        };

        const setCredentails = await fetch(firebaseSignUpURL, {
          method: "POST",
          body: JSON.stringify(formItems),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await setCredentails.json();
        console.log(data.error);
        if (setCredentails.ok) {
          console.log("login successful");
          console.log(data);
          localStorage.setItem("token", data.idToken);
          localStorage.setItem("email", data.email);
          loginCtx.loginToken(data.idToken);

          navigate("/store");
        } else {
          console.log(data.error);
          throw new Error(data.error.message);
        }
      } catch (error) {
        // alert(error);
      }
    }
  };

  return (
    <Form className="m-5 p-2">
      <h1 className="metal-font d-flex justify-content-center">Login Form</h1>
      <Form.Group className="mb-3 m-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 m-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={password}
          type="password"
          placeholder="Enter password"
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" onClick={onClickLoginHandler}>
          {isLogin ? "Login" : "SignUp"}
        </Button>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <Button
          variant="primary"
          onClick={() => {
            setIsLogin((prevState) => !prevState);
          }}
        >
          {!isLogin ? "Login" : "Create the Profile"}
        </Button>
      </div>
    </Form>
  );
};

export default Login;
