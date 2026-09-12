import React, { useState } from "react";
import LoginComp from "./LoginComp";

const ModalTask = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const handleLogin = ({ username, password }) => {
    // Replace with your real auth call
    console.log("Logging in with:", username, password);
    closeLogin();
  };

  return (
    <div className="p-8 text-center">
      <h1 className="mb-4 text-2xl font-semibold text-gray-800">
        Click here to view Login panel
      </h1>
      <button
        onClick={openLogin}
        className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
      >
        Get panel
      </button>

      {isLoginOpen && <LoginComp onClose={closeLogin} onLogin={handleLogin} />}
    </div>
  );
};

export default ModalTask;
