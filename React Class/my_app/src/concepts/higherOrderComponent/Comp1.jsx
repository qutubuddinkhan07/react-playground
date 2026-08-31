// import React, { useState } from "react";

// const Comp1 = () => {
//   let [state, setState] = useState(0);
//   let changeState = () => {
//     setState(++state);
//   };
//   return (
//     <div>
//       Comp1
//       <h1>{state}</h1>
//       <button onClick={changeState}>Change state</button>
//     </div>
//   );
// };

// export default Comp1;

//! correct use of Higher Order Component
// import React from "react";
// import HigherOrderComp from "./HigherOderComp";

// const Comp1 = (props) => {
//   return (
//     <div>
//       Comp1
//       <h1>{props.tech}</h1>
//     </div>
//   );
// };

// export default HigherOrderComp(Comp1);

//! USING WITH STATE
import React from "react";
import HigherOrderComp from "./HigherOderComp";

const Comp1 = (props) => {
  let {
    info: { state, changeState },
  } = props;
  return (
    <div>
      Comp1
      <h1>Count: {state}</h1>
      <button onClick={changeState}>Change state</button>
    </div>
  );
};

export default HigherOrderComp(Comp1);
