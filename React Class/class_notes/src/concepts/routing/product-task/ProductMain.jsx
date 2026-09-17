import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductHome from "./ProductHome";
import ProductAbout from "./ProductAbout";
import ProductNav from "./ProductNav";
import Cart from "./Cart";

const ProductMain = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductNav />
        <Routes>
          <Route path="/" element={<ProductHome />} />
          <Route path="/about" element={<ProductAbout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ProductMain;
