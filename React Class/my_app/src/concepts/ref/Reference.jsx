import React, { useRef } from "react";

// const Reference = () => {
//   let inputRef = useRef();
//   let changeInput = () => {
//     // console.log(inputRef); // {current: input}
//     // console.log(inputRef.current); // <input type="text"></input>
//     inputRef.current.focus();
//     inputRef.current.style.backgroundColor = "blue";
//     inputRef.current.style.color = "red";
//     console.log(inputRef.current.value); // hghjgh
//   };
//   return (
//     <div>
//       <h1>Reference</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={changeInput}>Focus</button>
//     </div>
//   );
// };

// export default Reference;

//! Creating a placeholder on click
// const Reference = () => {
//   let inputRef = useRef();
//   let changeInput = () => {
//     inputRef.current.placeholder = "enter username";
//   };
//   return (
//     <div>
//       <h1>Reference</h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={changeInput}>Focus</button>
//     </div>
//   );
// };

// export default Reference;

//! Creating video player
import nature from "../../assets/videos/nature.mp4";
const Reference = () => {
  let videoRef = useRef();
  //   console.log(videoRef);
  let play = () => {
    videoRef.current.play();
  };
  let pause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <video src={nature} height={200} width={300} ref={videoRef}></video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};

export default Reference;
