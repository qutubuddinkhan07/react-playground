import React, { useState } from "react";
import UseEffectChild from "./useEffectChild";

const UnmountingExample = () => {
  const [state, setState] = useState("Naruto");
  const handleChange = () => {
    setState("Hinata");
  };

  return (
    <div>
      <h1>{state}</h1>
      {state == "Naruto" ? <UseEffectChild /> : <></>}
      <button onClick={handleChange}>Change state</button>
    </div>
  );
};

export default UnmountingExample;
