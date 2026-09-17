import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="heading">Home Page</h1>
      <h3>Order Now..</h3>
      <button className="btn-primary" onClick={()=>navigate('/order-summary')}>Click to order</button>
    </div>
  );
};

export default Home;
