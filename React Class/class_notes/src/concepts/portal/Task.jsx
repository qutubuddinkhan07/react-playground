import React from "react";
import ReactDOM from "react-dom";

const Task = () => {
  const Modal = () => {
    return (
      <section>
        <article>Nav</article>
        <article>Body</article>
        <article>Footer</article>
      </section>
    );
  };
  return ReactDOM.createPortal(<Modal />, document.getElementById("portal"));
};

export default Task;
