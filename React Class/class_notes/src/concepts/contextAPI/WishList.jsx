import React, { useContext } from "react";
import { api, countAPI } from "./ContextAPI";

// const WishList = () => {
//   let b = useContext(api);
//   //   console.log(b);
//   return (
//     <div>
//       WishList
//       <h1>{b}</h1>
//     </div>
//   );
// };

// export default WishList;

//! ------ CHANGE STATE --------
const WishList = () => {
  let res = useContext(countAPI);
  // console.log(res); // {state: 0, changeState: ƒ}
  let { state, changeState } = res;
  return (
    <div>
      <h1>Count: {state}</h1>
      <button onMouseOver={changeState}>Change</button>
    </div>
  );
};

export default WishList;
