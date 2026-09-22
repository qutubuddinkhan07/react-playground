import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routing/Routing";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default App;
