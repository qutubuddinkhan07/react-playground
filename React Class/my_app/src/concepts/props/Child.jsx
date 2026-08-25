import React from "react";

//! Normal Props passing
//! Declaring a variable as a parameter inside the function - that will act as an object
// const Child = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Student Name: {props.stdName}</h1>
//       <h1>Student age: {props.age}</h1>
//       <h1>Qualified: {props.isQualified}</h1>
//     </div>
//   );
// };

// export default Child;

// ---------------------------------------------------

//! Destructuring the props
//! 1.
// const Child = (props) => {
//   let { stdName, age, isQualified } = props;
//   return (
//     <div>
//       <h1>Student Name: {stdName}</h1>
//       <h1>Student age: {age}</h1>
//       <h1>Qualified: {isQualified ? "Pass":"Fail"}</h1>
//     </div>
//   );
// };

// export default Child;

// -----------------------------------------------------

// const Child = ({ stdName, age, isQualified, isNull, isUndefined }) => {
//   // if the "attribute" or "value" is not being passed and we try to access it then -> it will be treated as falsy value
//   // here we can check by not providing "isUndefined" is passed from Parent to Child component that's why it is treated as "undefined"

//   // or we can directly send "undefined" and "null" as props
//   console.log(isNull); // null
//   console.log(isUndefined); // undefined
//   return (
//     <div>
//       <h1>Student Name: {stdName}</h1>
//       <h1>Student age: {age}</h1>
//       <h1>Qualified: {isQualified ? "Pass" : "Fail"}</h1>
//       <h1>isNull: {isNull == null ? "YES" : "NO"}</h1>
//       <h1>isUndefined: {isUndefined == undefined ? "YES" : "NO"}</h1>
//     </div>
//   );

//   // Prints YES
//   // Prints YES
// };

// export default Child;

// ---------------------------------------------------
//! Non-primitive datatype example
//! Rather doing like this use map
// const Child = ({ carList }) => {
//   return (
//     <ul>
//       <li>{carList[0]}</li>
//       <li>{carList[1]}</li>
//       <li>{carList[2]}</li>
//       <li>{carList[3]}</li>
//     </ul>
//   );
// };

// export default Child;

//! Use of Map()
// const Child = ({ carList }) => {
//   return (
//     <ul>
//       {carList.map((val, index) => {
//         return <li key={index}>{val}</li>;
//       })}
//     </ul>
//   );
// };

// export default Child;

//! Display function
//? Way: 1
// const Child = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.func()}</h1>
//     </div>
//   );
// };

//? Way: 2
// const Child = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.func()}</h1>
//     </div>
//   );
// };

// export default Child;

// export default Child;

//! props.children

// const Child = (props) => {
//   // console.log(props); // {children: Array(2)}
//   let { children } = props;
//   return (
//     <div>
//       {/* {props.children} */}
//       {children}
//     </div>
//   );
// };

// export default Child;

//! Default props
//? way: 1

// const Child = (props) => {
//   let { username, age = 10 } = props;
//   return (
//     <div>
//       <h1>{username}</h1>
//       <p>{age}</p>
//     </div>
//   );
// };

// export default Child;

//? way: 2
// const Child = (props) => {
//   let { username, age } = props;
//   return (
//     <div>
//       <h1>{username}</h1>
//       <p>{age || 10}</p>
//     </div>
//   );
// };

// export default Child;

//! Passing variables as array or objects in props
// const Child = (props) => {
//   console.log(props); // {student: {…}, technologies: Array(3)}
//   let {
//     student: { institute, fee, mode },
//     technologies: [t1, t2, t3],
//     children,
//   } = props;
//   return (
//     <div>
//       <h1>Institute: {institute}</h1>
//       <h1>Fee: {fee}</h1>
//       <h1>Mode: {mode}</h1>
//       <h1>
//         Technologies: {t1},{t2},{t3}
//       </h1>
//       {children}
//     </div>
//   );
// };

// export default Child;

//! Props are immutable

const Child = (props) => {
  console.log(props.username); // Naruto
  props.username = "Hinata";
  return <div>{props.username}</div>;
};

export default Child;
