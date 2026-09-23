import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routing/routes";
import { ToastContainer } from "react-toastify";

const TaskMain = () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  );
};

export default TaskMain;
