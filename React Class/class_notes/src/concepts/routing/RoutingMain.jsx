import React from "react";
import Routing from "./components/Routing";
import ProductMain from "./product-task/ProductMain";
import Task1 from "./task1/Task1";
import Task2 from "./task2/Task2";

const RoutingMain = () => {
  return (
    <>
      {/* <Routing /> */}
      {/* <ProductMain /> */}
      {/* <Task1 /> */}

      {/* //! Properly structured one  */}
      <Task2 />
    </>
  );
};

export default RoutingMain;
