// import React from "react";

// const HigherOrderComp = (Wrapper) => {
//   // console.log(Wrapper);
//   //   () => {
//   // 	return /* @__PURE__ */ _jsxDEV("div", { children: "Comp1" }, void 0, false, {
//   // 		fileName: _jsxFileName,
//   // 		lineNumber: 23,
//   // 		columnNumber: 10
//   // 	}, this);
//   // }
//   let newComponent = () => {
//     return <Wrapper tech="React js" />;
//   };
//   return newComponent;
// };

// export default HigherOrderComp;

import React, { useState } from "react";

const HigherOrderComp = (Wrapper) => {
  let newComponent = () => {
    let [state, setState] = useState(0);
    let changeState = () => {
      setState(++state);
    };
    return <Wrapper info={{ state, changeState }} />;
  };
  return newComponent;
};

export default HigherOrderComp;
