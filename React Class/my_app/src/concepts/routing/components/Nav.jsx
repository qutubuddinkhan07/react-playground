import React from "react";
import { Link, NavLink } from "react-router-dom";

//! Using Link
// const Nav = () => {
//   return (
//     <div className="bg-blue-800 h-12 flex p-2">
//       <div className="mr-auto">
//         <h1>Logo</h1>
//       </div>
//       <div>
//         <ul className="flex items-center gap-3">
//           <li>
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link to={"/about"}>About</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

//! Using <NavLink>
const Nav = () => {
  return (
    <div className="bg-blue-800 h-12 flex p-2">
      <div className="mr-auto">
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex items-center gap-3">
          <li className="nav-link">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to={"/product"}>Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
