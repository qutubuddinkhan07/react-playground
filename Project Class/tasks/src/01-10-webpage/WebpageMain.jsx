import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

const WebpageMain = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
};

export default WebpageMain;
