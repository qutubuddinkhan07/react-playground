import React, { useRef } from "react";

const Form = () => {
  const formDetails = useRef({ username: "", password: "" });

  const usernameRef = useRef(null);
  const paswordRef = useRef(null);

  const handleChange = (field) => (e) => {
    formDetails.current[field] = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails.current);

    formDetails.current = { username: "", password: "" };
    usernameRef.current.value = "";
    paswordRef.current.value = "";
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form
        action=""
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-lg shadow-md border border-slate-200 p-8"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            defaultValue={formDetails.current.username}
            onChange={handleChange("username")}
            ref={usernameRef}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="******"
            ref={paswordRef}
            defaultValue={formDetails.current.password}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            onChange={handleChange("password")}
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-900 text-white rounded-md py-2 font-medium hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
