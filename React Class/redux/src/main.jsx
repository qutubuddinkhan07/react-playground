import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import ReduxToolKitConcept from "./rtk/ReduxToolKitConcept";
import { rtkstore } from "./rtk/store/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

//! By Lavan Sir
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={rtkstore}>
    <ReduxToolKitConcept />
  </Provider>,
);
