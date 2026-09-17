import React from "react";
import Child from "./Child";

//! Primitive Datatype example
//! Except string datatype other datatypes should be passed inside curly braces
// const Parent = () => {
//   return (
//     <div>
//       <Child stdName="Hinata" age={24} isQualified={true} />
//     </div>
//   );
// };

// export default Parent;

//! checking and undefined with null or undefined values
// const Parent = () => {
//   return (
//     <div>
//       <Child
//         stdName="Hinata"
//         age={24}
//         isQualified={true}
//         isNull={null}
//         isUndefined={undefined}
//       />
//     </div>
//   );
// };

// export default Parent;

// -------------------------------------------------------
//! Non-primitive Example
// const Parent = () => {
//   return (
//     <div>
//       <Child carList={["BMG", "Mercedes", "Chevolt", "Lamborghini"]} />
//     </div>
//   );
// };

// export default Parent;

//! props.children

// const Parent = () => {
//   return (
//     <div>
//       <Child>
//         <h1>I am children</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//           corrupti incidunt nisi doloremque enim eveniet earum maxime
//           dignissimos natus sit.
//         </p>
//       </Child>
//     </div>
//   );
// };

// export default Parent;

//! Display function
// const Parent = () => {
//   return (
//     <div>
//       <Child func={() => "Hello"} />
//     </div>
//   );
// };

// export default Parent;

//! Default props
// const Parent = () =>{
//   return (
//     <div>
//       <Child username="Naruto"/>
//     </div>
//   );
// };

// export default Parent;

//! Passing variables as array or objects in props
// const Parent = () => {
//   let institute = "Qspider";
//   let fee = 40000;
//   let mode = "Offline";

//   let tech1 = "React JS";
//   let tech2 = "Web Tech";
//   let tech3 = "React JS";
//   return (
//     <div>
//       {/* <Child
//         student={{ institute, fee, mode }}
//         technologies={[tech1, tech2, tech3]}
//       /> */}
//       <Child
//         student={{ institute, fee, mode }}
//         technologies={[tech1, tech2, tech3]}
//       >
//         <h1>I am Java Full Stack Student</h1>
//       </Child>
//     </div>
//   );
// };

// export default Parent;

//! Props are immutable
const Parent = () => {
  return (
    <div>
      <Child username="Naruto" />
    </div>
  );
};

export default Parent;
