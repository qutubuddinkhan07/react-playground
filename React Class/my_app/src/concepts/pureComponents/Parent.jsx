//! ===== CLASS BASED COMPONENT =======
// import { Component } from "react";
// import NormalChild from "./NormalChild";
// import PureChild from "./PureChild";

// export default class Parent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       emp_name: "John",
//     };
//   }

//   handleChange = () => {
//     this.setState({ emp_name: "Smith" });
//   };

//   render() {
//     console.log("Parent component rendering.");
//     return (
//       <div>
//         <h1>Parent -- {this.state.emp_name}</h1>
//         <NormalChild name={this.state.emp_name} />
//         <PureChild name={this.state.emp_name} />
//         <button
//           className="bg-pink-600 text-white font-medium rounded-xl px-2 cursor-pointer"
//           onClick={this.handleChange}
//         >
//           Change
//         </button>
//       </div>
//     );
//   }
// }

//! ----- USING FUNCTION BASED COMPONENT --------
import React, { useState } from "react";
import NormalChild from "./NormalChild";
import PureChild from "./PureChild";

const Parent = () => {
  const [state, setState] = useState({ name: "Naruto" });
  const handleChange = () => {
    setState({ name: "Hinata" });
  };
  console.log("Parent component rendering.");

  return (
    <div>
      <h1>Parent -- {state.name}</h1>
      <h1>
        <NormalChild name={state.name} />
      </h1>
      <h1>
        <PureChild name={state.name} />
      </h1>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Parent;
