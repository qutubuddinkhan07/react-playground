import React, { useState } from "react";

const ArrayControlling = () => {
  const [arr, setArr] = useState([10, 20]);
  const incArr = () => {
    setArr((prev) => {
      let lastValue = prev.length > 0 ? prev[prev.length - 1] : 0;
      return [...prev, lastValue + 10];
    });
  };

  const decArr = () => {
    if (arr.length === 0) {
      alert("Not many elements to decrease");
      return;
    }
    setArr((prev) => prev.slice(0, -1));
  };
  return (
    <div>
      <p>Increase/Decrease value by 10</p>
      <button onClick={incArr}>Increase</button>
      <button onClick={decArr}>Decrease</button>
      <h1>
        {arr.map((val, index) => {
          return <span key={index}>{val} </span>;
        })}
      </h1>
    </div>
  );
};

export default ArrayControlling;
