import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="">
      <h1 className="heading1">{count}</h1>

      <div className="flex gap-3" >
        <button className="btn-primary" onClick={() => dispatch("increment")}>
          increment
        </button>
        <button className="btn-secondary" onClick={() => dispatch("decrement")}>
          Decrement
        </button>
        <button className="btn-danger" onClick={() => dispatch("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer;

