import React from "react";

const File3 = (props) => {
  console.log(props); // info: {username: 'Naruto', changeUsername: ƒ}
  let {
    info: { username, changeUsername },
  } = props;
  return (
    <div>
      <h1>{username}</h1>
      <button onClick={changeUsername}>Change Username</button>
    </div>
  );
};

export default File3;
