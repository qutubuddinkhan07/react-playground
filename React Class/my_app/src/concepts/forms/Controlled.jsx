import React from "react";
import { useState } from "react";

//! Controlled form handling
// import React, { useState } from 'react'

// const Controlled = () => {
//     let [username,setUsername] = useState("")
//     let handleChange=(e)=>{
//     //    console.log(e.target.value)
//        setUsername(e.target.value)
//     }
//     let handleSubmit=(e)=>{
//            e.preventDefault()
//            console.log("username:", username)
//     }
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit}>
//             <label htmlFor="">username : </label>
//             <input type="text" onChange={handleChange} /> <br /> <br />
//               <br />
//             <input type="submit" value="Login" />
//         </form>
//     </div>
//   )
// }

// export default Controlled

const Controlled = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
  });
  let handleChange = (e) => {
    //    console.log(e.target.name , e.target.value)
    // let name =e.target.name
    // let value =e.target.value
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">username : </label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
        /> <br /> <br />
        <label htmlFor="">password : </label>
        <input type="password" name="password" onChange={handleChange} /> <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Controlled;
