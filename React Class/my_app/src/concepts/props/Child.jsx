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
const Child = ({ carList }) => {
  return (
    <ul>
      {carList.map((val, index) => {
        return <li key={index}>{val}</li>;
      })}
    </ul>
  );
};

export default Child;
