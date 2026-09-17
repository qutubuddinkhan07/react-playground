import React, { createContext, useState } from "react";
import Cart from "./Cart";
import WishList from "./WishList";

export let api = createContext();
// const ContextAPI = () => {
//   // console.log(api); // Consumer: {}, Provider: {}
//   return (
//     <div>
//       <api.Provider value="Nice meeting you...!">
//         <Cart />
//         <WishList />
//       </api.Provider>
//     </div>
//   );
// };

// export default ContextAPI;

//! ----- PASSING STATE ----------
export let countAPI = createContext();
const ContextAPI = () => {
  let [state, setCount] = useState(0);
  let changeState = () => {
    setCount(state + 1);
  };
  return (
    <div>
      <countAPI.Provider value={{ state, changeState }}>
        <Cart />
        <WishList />
      </countAPI.Provider>
    </div>
  );
};

export default ContextAPI;
