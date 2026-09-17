import React, { useState } from "react";

const CounterFBC = () => {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incCount}>Increase</button>
      <button onClick={decCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default CounterFBC;
