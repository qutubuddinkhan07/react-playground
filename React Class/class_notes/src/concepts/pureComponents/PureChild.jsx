//! ===== CLASS BASED COMPONENT =======
// import React, { Component, PureComponent } from "react";

// // export default class PureChild extends Component {
// //   render() {
// //     console.log("PureChild component rendering.");
// //     return <div>PureChild -- {this.props.name}</div>;
// //   }
// // }

// //! With PureComponent
// export default class PureChild extends PureComponent {
//   render() {
//     console.log("PureChild component rendering.");
//     return <div>PureChild -- {this.props.name}</div>;
//   }
// }

//! ----- USING FUNCTION BASED COMPONENT --------
// import React from "react";

// const PureChild = ({ name }) => {
//   console.log("PureChild component rendering.");
//   return <div>PureChild -- {name}</div>;
// };

// export default PureChild;

//? ----- USING memo() --------
import React, { memo } from "react";

const PureChild = ({ name }) => {
  console.log("PureChild component rendering.");
  return <div>PureChild -- {name}</div>;
};

export default memo(PureChild);
