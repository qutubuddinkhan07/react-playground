import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Product from "./Product";
import Order from "./Order";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/order-summary" element={<Order />} />

          {/* //! Nested Routing Concept */}
          <Route path="/product" element={<Product />}>
            <Route index element={<Cart />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
