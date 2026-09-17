//! ===== CLASS BASED COMPONENT =======
// import React, { Component } from "react";
// import Parent from "./Parent";

// export default class PureComponents extends Component {
//   render() {
//     return (
//       <div>
//         <Parent />
//       </div>
//     );
//   }
// }

//! === First time rendering without extending PureComponent [PureChild] =
/*  OUTPUT
---------- in mounting phase ---------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

---------- in updating phase ----------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

Parent component rendering.
NormalChild component rendering.
PureChild component rendering.
.
.
.

*/

//! === First time rendering with extending PureComponent [PureChild] =
/*  OUTPUT
---------- in mounting phase ---------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

---------- in updating phase ----------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

----- (if state is not changing) ----------
Parent component rendering.
NormalChild component rendering.
Parent component rendering.
NormalChild component rendering.
.
.
.

*/

//! ==============================================
//! FUNCTION BASED COMPONENT
import React from "react";
import Parent from "./Parent";

const PureComponents = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default PureComponents;

//! === Second time rendering by using Class Base Component without extending PureComponent [PureChild] =
/*  OUTPUT
---------- in mounting phase ---------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

---------- in updating phase ----------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

Parent component rendering.
NormalChild component rendering.
PureChild component rendering.
.
.
.

*/

//! === Second time rendering Function Based Component by using memo(PureChild) =
/*  OUTPUT
---------- in mounting phase ---------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

---------- in updating phase ----------------
Parent component rendering.
NormalChild component rendering.
PureChild component rendering.

----- (if state is not changing) ----------
Parent component rendering.
NormalChild component rendering.
Parent component rendering.
NormalChild component rendering.
.
.
.

*/
