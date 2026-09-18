import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 0 };
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset1":
      return { ...state, firstCounter: 0 };
    case "reset2":
      return { ...state, secondCounter: 0 };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};

const UseReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 className="heading1">{count.firstCounter}</h1>
      <div className="flex gap-3">
        <button
          className="btn-primary"
          onClick={() => dispatch({ type: "increment1", value: 1 })}
        >
          Increment by 1
        </button>
        <button
          className="btn-secondary"
          onClick={() => dispatch({ type: "decrement1", value: 1 })}
        >
          Decrement by 1
        </button>
        <button
          className="btn-danger"
          onClick={() => dispatch({ type: "reset1" })}
        >
          Reset
        </button>
      </div>
      <h1 className="heading1">{count.secondCounter}</h1>
      <div className="flex gap-3">
        <button
          className="btn-primary"
          onClick={() => dispatch({ type: "increment2", value: 10 })}
        >
          Increment by 10
        </button>
        <button
          className="btn-secondary"
          onClick={() => dispatch({ type: "decrement2", value: 10 })}
        >
          Decrement by 10
        </button>
        <button
          className="btn-danger"
          onClick={() => dispatch({ type: "reset2" })}
        >
          Reset
        </button>
      </div>
      <div className="mt-2">
        <button
          className="btn-danger"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default UseReducer2;
