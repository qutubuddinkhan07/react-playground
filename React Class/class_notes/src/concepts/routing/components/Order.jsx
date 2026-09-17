import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="heading">Order</h1>
      <h3>Your order has been placed!!!!!!!</h3>
      <button className="btn-primary" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default Order;
