import React, { use } from "react";
import { useState } from "react";

const File2 = () => {
  // let state = useState();
  // console.log(state); // array with 2 elements -(2) [undefined, ƒ]
  let [name, setName] = useState("Naruto");
  let [company, setCompany] = useState("Genin");
  let [age, setAge] = useState(16);

  let change = () => {
    setName("Naruto Uzumaki");
    setCompany("Hokage");
    setAge(28);
  };
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Working status: {company}</h1>
      <h1>Age: {age}</h1>
      <button onClick={change}>Change Quest</button>
    </div>
  );
};

export default File2;
