import React from "react";
import File3 from "./File3";

const File2 = (props) => {
  // console.log(props) // {details: {…}}
  let { details } = props;
  return (
    <div>
      <File3 info={details} />
    </div>
  );
};

export default File2;
