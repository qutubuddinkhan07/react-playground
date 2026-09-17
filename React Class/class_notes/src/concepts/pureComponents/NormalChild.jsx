//! ===== CLASS BASED COMPONENT =======
// import { Component } from "react";

// export default class NormalChild extends Component {
//   render() {
//     // console.log(this.props); // {name: 'John'}
//     console.log("NormalChild component rendering.");
//     return (
//       <div>
//         <h1>Normal Child -- {this.props.name}</h1>
//       </div>
//     );
//   }
// }

//! ----- USING FUNCTION BASED COMPONENT --------
import React from "react";

const NormalChild = ({ name }) => {
  console.log("NormalChild component rendering.");
  return <div>Normal Child -- {name}</div>;
};

export default NormalChild;
