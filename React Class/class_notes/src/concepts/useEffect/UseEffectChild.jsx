import React, { useEffect } from "react";

const UseEffectChild = () => {
  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  });
  return <div>UseEffectChild</div>;
};

export default UseEffectChild;
