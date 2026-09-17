import React, { useState } from "react";
import Portal from "./Portal";
import Task from "./Task";

const PortalMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Portal /> */}
      <button onClick={toggle}>Sign up {isOpen ? <Task /> : <></>}</button>
    </>
  );
};

export default PortalMain;
