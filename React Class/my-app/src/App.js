import React from "react";
import Naruto from "./assets/naruto.png";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <img src={Naruto} alt="Example" className="demo-img" />
    </div>
  );
};

export default App;
