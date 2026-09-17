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

//! Control form using object to store
// const Controlled = () => {
//   let [state, setState] = useState({
//     username: "",
//     password: "",
//   });
//   let handleChange = (e) => {
//     //    console.log(e.target.name , e.target.value)
//     // let name =e.target.name
//     // let value =e.target.value
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(state);
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">username : </label>
//         <input
//           type="text"
//           name="username"
//           onChange={handleChange}
//         /> <br /> <br />
//         <label htmlFor="">password : </label>
//         <input type="password" name="password" onChange={handleChange} /> <br />
//         <br />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

// export default Controlled;

//! Controlling radio buttons
const Controlled = () => {
  let [formData, setFormData] = useState({
    username: "",
    password: "",
    gender: "",
    state: "",
    techstack: [],
  });
  let handleChange = (e) => {
    //    console.log(e.target.name , e.target.value)
    // let name =e.target.name
    // let value =e.target.value

    //! normal handling for inputs
    // let { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });

    //! by using checkbox advance
    let { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        let updatedTask = checked
          ? [...prev.techstack, value]
          : prev.techstack.filter((item) => item !== value);
        return { ...prev, techstack: updatedTask };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const { username, password, gender, state, techstack } = formData;
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      password: "",
      gender: "",
      state: "",
      techstack: [],
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username : </label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        {/* //! usign raio buttons */}
        <div>
          <p>Gender:</p>
          <div>
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                checked={gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value={"female"}
                checked={gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label htmlFor="others">
              <input
                type="radio"
                name="gender"
                id="others"
                value={"others"}
                checked={gender === "others"}
                onChange={handleChange}
              />
              Others
            </label>
          </div>
        </div>

        {/* //! to use select option */}
        <div>
          <select name="state" id="state" value={state} onChange={handleChange}>
            <option disabled value={""}>
              none
            </option>
            <option value="karnataka">karnataka</option>
            <option value="odisha">odisha</option>
            <option value="andra">andra</option>
            <option value="kerela">kerela</option>
          </select>
        </div>

        {/* //! checkbox */}
        <div>
          <p>Tech Stack:</p>
          <div>
            <label htmlFor="react">
              <input
                type="checkbox"
                name="techstack"
                id="react"
                value={"react"}
                onChange={handleChange}
                checked={techstack.includes("react")}
              />
              React
            </label>
            <label htmlFor="mern">
              <input
                type="checkbox"
                name="techstack"
                id="mern"
                value={"mern"}
                onChange={handleChange}
                checked={techstack.includes("mern")}
              />
              mern
            </label>
            <label htmlFor="java">
              <input
                type="checkbox"
                name="techstack"
                id="java"
                value={"java"}
                onChange={handleChange}
                checked={techstack.includes("java")}
              />
              java
            </label>
          </div>
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Controlled;
