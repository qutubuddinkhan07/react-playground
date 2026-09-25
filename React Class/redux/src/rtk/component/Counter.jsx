import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  //   const data = useSelector((state) => state);
  //   console.log(data); // counter:{count: 0}

  const data = useSelector((state) => state.counter);
  // console.log(data); // {count: 0}

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {data.count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
