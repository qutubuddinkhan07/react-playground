import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { type } from "@testing-library/user-event/dist/type";

// creating a table
let table = React.createElement(
  "table",
  {
    style: {
      border: "1px solid black",
      borderCollapse: "collapse",
      width: "300px",
    },
  },
  React.createElement(
    "thead",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement("th", null, "Id"),
      React.createElement("th", null, "Name"),
      React.createElement("th", null, "Stream"),
    ),
  ),
  React.createElement(
    "tbody",
    null,
    React.createElement(
      "tr",
      { className: "student-row" },
      React.createElement("td", null, "001"),
      React.createElement("td", null, "Naruto"),
      React.createElement("td", null, "React"),
    ),
    React.createElement(
      "tr",
      { className: "student-row" },
      React.createElement("td", null, "002"),
      React.createElement("td", null, "Hinata"),
      React.createElement("td", null, "React"),
    ),
  ),
);

// ReactDOM.createRoot(document.getElementById("root")).render(table);

// --------- Form ----------------
let form = React.createElement(
  "div",
  { className: "outer-box" },
  React.createElement(
    "form",
    { className: "login-form" },
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("label", { htmlFor: "username" }, "Enter username: "),
      React.createElement(
        "input",
        {
          type: "text",
          placeholder: "Enter username",
          id: "username",
          className: "form-input",
        },
        null,
      ),
    ),
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("label", { htmlFor: "password" }, "Enter Password: "),
      React.createElement(
        "input",
        {
          type: "password",
          placeholder: "Enter password",
          id: "password",
          className: "form-input",
        },
        null,
      ),
    ),
    React.createElement(
      "input",
      { type: "button", value: "Submit", className: "submit-btn" },
      null,
    ),
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(form);
