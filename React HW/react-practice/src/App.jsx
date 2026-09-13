import React, { Fragment } from "react";
import IndexPortal from "./Tasks/09-09-portal/IndexPortal";
import IndexUseRef from "./Tasks/01-09-useRef/IndexUseRef";
import IndexUseState from "./Tasks/08-09-useState/IndexUseState";
import UseEffectTask from "./Tasks/13-09-useEffect/UseEffectTask";
import IndexComponentArchitecture from "./Tasks/17-08-component-architecture/IndexComponentArchitecture";
import IndexWebpage from "./Tasks/20-08-nav-webpage/IndexWebpage";
import IndexProps from "./Tasks/24-08-props/IndexProps";
import IndexState from "./Tasks/27-08-state/IndexState";

const App = () => {
  return (
    <Fragment>
      {/* //!  Component architecture */}
      {/* //!  <IndexComponentArchitecture /> */}

      {/* //!  Webpage */}
      {/* //!  <IndexWebpage /> */}

      {/* //!  Props */}
      {/* //!  <IndexProps /> */}

      {/* //!  State */}
      <IndexState />

      {/* //!  useRef */}
      {/* //!  <IndexUseRef /> */}

      {/* //!  useState */}
      {/* //!  <IndexUseState /> */}

      {/* //!  Portal */}
      {/* //!  <IndexPortal /> */}

      {/* //!  useEffect */}
      {/* //!  <UseEffectTask /> */}
    </Fragment>
  );
};

export default App;
