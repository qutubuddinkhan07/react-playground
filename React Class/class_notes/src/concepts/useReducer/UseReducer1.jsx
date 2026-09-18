import React, { useReducer } from "react";

//! Another way
const initialState = { firstCounter: 0 };
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
  }
};

const UseReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="">
      <h1 className="heading1">{count.firstCounter}</h1>

      <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl p-4">
        <button
          className="btn-primary hover-grow"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          increment
        </button>
        <button
          className="btn-secondary hover-grow"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
        <button
          className="btn-primary hover-grow"
          onClick={() => dispatch({ type: "increment", value: 5 })}
        >
          increment by 5
        </button>
        <button
          className="btn-secondary hover-grow"
          onClick={() => dispatch({ type: "decrement", value: 5 })}
        >
          Decrement by 5
        </button>
        <button
          className="btn-danger hover-grow"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducer1;
