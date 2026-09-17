import React from "react";
import Admin from "./Admin";
import User from "./User";
import Manager from "./Manager";

//! Using if-else ladder
// const File1 = () => {
//   let num = 7;
//   if (num % 2 == 0) {
//     return <h1>{num} is even number.</h1>;
//   } else {
//     return <h1>{num} is odd number.</h1>;
//   }
// };

// export default File1;

//! Using ternary operator
// const File1 = () => {
//   let mood = "happy";
//   return (
//     <div>
//       <h1>{mood == "happy" ? "😊" : "😢"}</h1>
//     </div>
//   );
// };

// export default File1;

//! Using Short-circuit way
// const File1 = () => {
//   let isLoggedIn = true;
//   return <div>{isLoggedIn && <h1>Welcome back!!</h1>}</div>;
// };

// export default File1;

//! Rendering component
// const File1 = () => {
//   let role = "admin";
//   return <div>{role == "admin" ? <Admin /> : <User />}</div>;
// };

// export default File1;

//! ----- here the Admin will be displayed if logged in & role = admin
// const File1 = () => {
//   let isLoggedIn = true;
//   let role = "admin";
//   return <div>{isLoggedIn && role == "admin" && <Admin />}</div>;
// };

// export default File1;

//! ----- small task
const File1 = () => {
  //   let role = "admin";
  let role = "manager";
  return (
    <div>
      {/* {isLoggedIn &&
        ((role == "admin" && <Admin />) ||
          (role == "manager" && <Manager />) ||
          (role == "user" && <User />))} */}

      {role == "admin" ? <Admin /> : role == "manager" ? <Manager /> : <User />}
    </div>
  );
};

export default File1;
