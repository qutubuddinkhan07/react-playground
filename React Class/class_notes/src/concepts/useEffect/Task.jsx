import React, { useEffect, useState } from "react";

const Task = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} Clicked`;
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Change</button>
    </div>
  );
};

export default Task;
