import React, { use } from "react";
import { useState } from "react";

// const File2 = () => {
//   // let state = useState();
//   // console.log(state); // array with 2 elements -(2) [undefined, ƒ]
//   let [name, setName] = useState("Naruto");
//   let [company, setCompany] = useState("Genin");
//   let [age, setAge] = useState(16);

//   let change = () => {
//     setName("Naruto Uzumaki");
//     setCompany("Hokage");
//     setAge(28);
//   };
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Working status: {company}</h1>
//       <h1>Age: {age}</h1>
//       <button onClick={change}>Change Quest</button>
//     </div>
//   );
// };

// export default File2;

//! Using non-primitive values
// const File2 = () => {
//   let [arr, setArr] = useState(["Samuel", "Akbar", "Goku"]);
//   const changeArr = () => {
//     setArr(["Diamond", "Ruchika", "Ichigo"]);
//   };

//   const [userInp, setUserInp] = useState("");
//   const addStudent = () => {
//     // const temp = arr.concat(userInp);
//     // setArr(temp);
//     setArr([...arr, userInp]);
//     setUserInp("");
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={userInp}
//           onChange={(e) => setUserInp(e.target.value)}
//         />
//         <button onClick={addStudent}>Add student</button>
//       </div>
//       <ul>
//         {arr.map((val, index) => {
//           return <li key={index}>{val}</li>;
//         })}
//       </ul>
//       <button onClick={changeArr}>Change Arr</button>
//     </div>
//   );
// };

// export default File2;

//? Storing object in state
const File2 = () => {
  let [employee, setEmployee] = useState({
    emp_id: 102,
    emp_name: "Naruto",
    emp_company: "Genpact",
  });
  let changeEmp = () => {
    setEmployee({ emp_id: 102, emp_name: "Naruto", emp_company: "Nvidia" });
  };
  let { emp_id, emp_name, emp_company } = employee;

  return (
    <div>
      <h1>
        I am {emp_name} working at {emp_company}
      </h1>
      <button onClick={changeEmp}>Update Employee</button>
    </div>
  );
};

export default File2;
