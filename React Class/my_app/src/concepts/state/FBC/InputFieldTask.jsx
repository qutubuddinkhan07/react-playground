import React, { useState } from "react";

// const InputFieldTask = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="flex gap-2">
//       <input
//         className="border border-slate-300 bg-white py-3 pl-4 pr-12 text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 rounded-xl"
//         placeholder="Enter your password"
//         type={visible ? "text" : "password"}
//       />
//       <button
//         className="bg-blue-900 text-white p-3 rounded-xl"
//         onClick={() => setVisible(!visible)}
//       >
//         {visible ? "Hide Pass" : "Show Pass"}
//       </button>
//     </div>
//   );
// };

// export default InputFieldTask;

// ----------------------------------------------------
const InputFieldTask = () => {
  const [username, setUsername] = useState("");
  const changeDetect = (e) => {
    setUsername(e.target.value);
  };

  const getBackgroundColor = (length) => {
    if (length >= 12) return "violet";
    if (length >= 8) return "blue";
    if (length >= 4) return "red";
    return "black";
  };
  return (
    <div>
      <input
        type="text"
        onChange={changeDetect}
        className=""
        placeholder="Enter username"
      />
      <h1 style={{ color: getBackgroundColor(username.length) }}>
        {username}
      </h1>
    </div>
  );
};

export default InputFieldTask;
