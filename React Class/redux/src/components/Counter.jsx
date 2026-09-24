import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // let count = useSelector((state) => state.count);
  let count = useSelector((state) => state.counter.count); // because we are wrapping CounterReducer into RootReducers
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
