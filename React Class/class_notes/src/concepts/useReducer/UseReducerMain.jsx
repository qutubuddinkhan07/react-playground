import React from "react";
import UseReducer from "./UseReducer";
import UseReducer1 from "./UseReducer1";
import UseReducer2 from "./UseReducer2";

const UseReducerMain = () => {
  return (
    <div className="page-container">
      {/* <UseReducer /> */}

      {/* //! Another way */}
      {/* <UseReducer1 /> */}

      <UseReducer2 />
    </div>
  );
};

export default UseReducerMain;
