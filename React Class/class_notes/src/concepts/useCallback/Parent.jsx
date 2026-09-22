import React, { useCallback, useState } from "react";
import Child from "./Child";
import Button from "./Button";

const Parent = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  // const incAge = () => {
  //   setAge(age + 1);
  // };

  // const incSalary = () => {
  //   setSalary(salary + 1000);
  // };

  //! Using useCallback()
  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Child info={age}>Age</Child>
      <Child info={salary}>Salary</Child>
      <Button fun={incAge}>Increment Age</Button>
      <Button fun={incSalary}>Increment Salary</Button>
    </div>
  );
};

export default Parent;
