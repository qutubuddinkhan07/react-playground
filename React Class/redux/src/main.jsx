import React, { Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import ReduxToolKitConcept from "./rtk/ReduxToolKitConcept";
import { rtkstore } from "./rtk/store/store";
import { RouterProvider } from "react-router-dom";
import { route } from "./lazyLoading/routes";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

//! By Lavan Sir
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={rtkstore}>
//     <ReduxToolKitConcept />
//   </Provider>,
// );

//! Lazy loading
// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={route} />,
// );

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<h1>Loading.....</h1>}>
    <RouterProvider router={route} />
  </Suspense>,
);
