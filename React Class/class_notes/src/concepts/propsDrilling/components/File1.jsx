import React, { useState } from "react";
import File2 from "./File2";

const File1 = () => {
  let [username, setUsername] = useState("Naruto");
  let changeUsername = () => {
    setUsername("Hinata");
  };
  return (
    <div>
      <File2 details={{ username, changeUsername }} />
    </div>
  );
};

export default File1;
