import React, { useContext } from "react";
import { api, countAPI } from "./ContextAPI";

// const Cart = () => {
//   let a = useContext(api);
//   // console.log(a); // Nice meeting you...!
//   return (
//     <div>
//       Cart
//       <h1>{a}</h1>
//     </div>
//   );
// };

// export default Cart;

//! ------- Change State ------------
const Cart = () => {
  let res = useContext(countAPI);
  // console.log(res); // {state: 0, changeState: ƒ}
  let { state, changeState } = res;
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  );
};

export default Cart;
