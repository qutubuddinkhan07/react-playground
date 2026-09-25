import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counter/counterSlice";
import Counter from "./component/Counter";
import Instagram from "./component/Instagram";

const ReduxToolKitConcept = () => {
  return (
    <div>
      ReduxToolKitConcept
      {/* <Counter /> */}
      <Instagram />
    </div>
  );
};

export default ReduxToolKitConcept;
