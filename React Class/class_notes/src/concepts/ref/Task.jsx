import React, { useRef } from "react";

//! Change color task
const Task = () => {
  let colorRef = useRef();
  let colorChange = (color, bgcolor) => {
    colorRef.current.style.color = color;
    colorRef.current.style.backgroundColor = bgcolor;
  };
  return (
    <div>
      <input type="text" ref={colorRef} />
      <button onClick={() => colorChange("red", "#5992C6")}>Red</button>
      <button onClick={() => colorChange("green", "#31241F")}>Green</button>
      <button onClick={() => colorChange("blue", "#E9B8C9")}>Blue</button>
    </div>
  );
};

export default Task;
