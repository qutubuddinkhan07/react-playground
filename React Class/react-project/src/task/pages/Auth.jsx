import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);

  const changePage = () => {
    setLoginPage(!loginPage);
  };
  return (
    <div>
      {loginPage ? (
        <Login changePage={changePage} />
      ) : (
        <Signup changePage={changePage} />
      )}
    </div>
  );
};

export default Auth;
