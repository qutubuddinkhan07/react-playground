import React from "react";

const HigherOrderComponent = (Wrapper) => {
  let newComponent = () => {
    return <Wrapper />;
  };
  return newComponent;
};

export default HigherOrderComponent;
