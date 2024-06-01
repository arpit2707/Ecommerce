import React from "react";
import { Route, Routes, Switch, Navigate } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MusicAlbums from "./components/MusicAlbums";
import CartContextStore from "./utils/CartContextStore";
import ContactUs from "./components/ContactUs";
import Product from "./components/Product";
import Login from "./components/Login";
import LoginContextStore from "./utils/LoginContextStore";

function Example() {
  const localToken = localStorage.getItem("token");

  return (
    <div>
      <LoginContextStore>
        <CartContextStore>
          <Header />
          <Banner />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/store"
              element={
                localToken ? (
                  <MusicAlbums />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Cart />
          <Footer />
        </CartContextStore>
      </LoginContextStore>
    </div>
  );
}

export default Example;
