import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const res = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");
  const handleChange = (e) => {
    setInp(e.target.value);
  };

  return (
    <div>
      <h1>Name: {res}</h1>

      <input
        type="text"
        className="border-2"
        value={inp}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: inp })}>
        Add
      </button>
    </div>
  );
};

export default User;
