import React, { useState } from "react";

const StateUpdate = () => {
  const [count, setCount] = useState(0);
  //   const changeCount = () => { // using this is WRONG
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   };

  const changeCount = () => {
    // using this is CORRECT
    // setCount((prevState) => console.log(prevState)); // 0 undefined

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={changeCount}>Change</button>
    </div>
  );
};

export default StateUpdate;
