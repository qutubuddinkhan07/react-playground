import React, { useEffect, useState } from "react";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const Task1 = () => {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default Task1;
