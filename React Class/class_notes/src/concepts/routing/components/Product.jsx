import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className="heading">Product</h1>
      <Link to="cart">Cart</Link>
      <Link to="wishlist">Wishlist</Link>

      <Outlet />
    </div>
  );
};

export default Product;
