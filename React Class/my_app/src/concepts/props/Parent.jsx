import React from "react";
import Child from "./Child";

//! Primitive Datatype example
//! Except string datatype other datatypes should be passed inside curly braces
// const Parent = () => {
//   return (
//     <div>
//       <Child stdName="Hinata" age={24} isQualified={true} />
//     </div>
//   );
// };

// export default Parent;

//! checking and undefined with null or undefined values
// const Parent = () => {
//   return (
//     <div>
//       <Child
//         stdName="Hinata"
//         age={24}
//         isQualified={true}
//         isNull={null}
//         isUndefined={undefined}
//       />
//     </div>
//   );
// };

// export default Parent;

// -------------------------------------------------------
//! Non-primitive Example
const Parent = () => {
  return (
    <div>
      <Child carList={["BMG", "Mercedes", "Chevolt", "Lamborghini"]} />
    </div>
  );
};

export default Parent;
