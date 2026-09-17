import React from "react";

const Username = (props) => {
    if (props.name === "Himawari") {
      throw new Error("Something went wrong");
    }
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

export default Username;
