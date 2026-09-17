import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //! Syntax
  //! useEffect(callback, dependency)

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const changeCount1 = () => {
    setCount((prev) => prev + 1);
  };
  const changeCount2 = () => {
    setCount2((prev) => prev + 2);
  };

  //! ======= WITHOUT DEPENDENCY ====================
  //! If we use useEffect() without dependency (execute for  both componentDidMount(), componentDidUpdate())

  //   useEffect(() => {
  //     console.log("useEffect() called");
  //   });

  //? The useState() will be executed for mounting, updating phase `for every state change/with every re-render`

  //! ======= WITH EMPTY DEPENDENCY ====================
  //! If we use useEffect() with empty dependency (execute for only componentDidMount())

  //   useEffect(() => {
  //     console.log("useEffect() called");
  //   }, []);

  //? The useState() will be executed for mounting phase only

  //! ======= WITH DEPENDENCY ====================
  //! If we use useEffect() with dependency (execute for both componentDidMount(), componentDidUpdate() - but only when the changes happen in dependency)

  useEffect(() => {
    console.log("useEffect() called");
  }, [count]);

  //? The useState() will be executed for mounting phase and updating phase of `count` only

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={changeCount1}>Increase by 1</button>

      <h1>Count2: {count2}</h1>
      <button onClick={changeCount2}>Increase by 2</button>
    </div>
  );
};

export default UseEffect;
