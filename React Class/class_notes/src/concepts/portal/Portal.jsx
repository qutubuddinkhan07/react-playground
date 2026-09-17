import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <h1>Working on Portals</h1>,
    document.getElementById("portal"),
  );
};

export default Portal;

/*
OUTPUT
Working on Portal
(in the O/P, <h1> tag is inserted into div with id="portal")
*/
