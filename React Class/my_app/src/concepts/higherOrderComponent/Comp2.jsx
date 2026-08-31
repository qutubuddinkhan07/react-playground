// import React, { useState } from "react";

// const Comp2 = () => {
//   let [state, setState] = useState(0);
//   let changeState = () => {
//     setState(++state);
//   };
//   return (
//     <div>
//       Comp2
//       <h1>{state}</h1>
//       <button onClick={changeState}>Change state</button>
//     </div>
//   );
// };

// export default Comp2;

//! correct use of Higher Order Component
// import React from "react";
// import HigherOrderComp from "./HigherOderComp";

// const Comp2 = (props) => {
//   return (
//     <div>
//       Comp2
//       <h1>{props.tech}</h1>
//     </div>
//   );
// };

// export default HigherOrderComp(Comp2);

//! USING STATE
import React from "react";
import HigherOrderComp from "./HigherOderComp";

const Comp2 = (props) => {
  let {
    info: { state, changeState },
  } = props;
  return (
    <div>
      Comp2
      <h1>Count: {state}</h1>
      <button onMouseOver={changeState}>Hover me</button>
    </div>
  );
};

export default HigherOrderComp(Comp2);
