import React, { useState } from "react";

const Task = () => {
  //! Printing even odd numbers
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Count: {count} - <span>{count % 2 == 0 ? "Even" : "Odd"}</span>
      </h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export default Task;
