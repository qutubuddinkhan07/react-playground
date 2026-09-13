import React, { useRef } from "react";

const Form = () => {
  const formDetails = useRef({ username: "", password: "", gender: "" });

  const usernameRef = useRef(null);
  const paswordRef = useRef(null);

  const maleGen = useRef(null);
  const femaleGen = useRef(null);
  const othersGen = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    formDetails.current[name] = value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails.current);

    formDetails.current = { username: "", password: "", gender: "" };
    usernameRef.current.value = "";
    paswordRef.current.value = "";

    maleGen.current.checked = false;
    femaleGen.current.checked = false;
    othersGen.current.checked = false;
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
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={formDetails.current.username}
            onChange={handleChange}
            ref={usernameRef}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              ref={paswordRef}
              defaultValue={formDetails.current.password}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="block text-sm font-medium text-slate-700 mb-2">
            Gender
          </p>
          <div className="flex items-center gap-6">
            <label
              htmlFor="gender-male"
              className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
            >
              <input
                type="radio"
                value="male"
                id="gender-male"
                name="gender"
                ref={maleGen}
                onChange={handleChange}
                className="h-4 w-4 accent-slate-900 cursor-pointer"
              />
              Male
            </label>

            <label
              htmlFor="gender-female"
              className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
            >
              <input
                type="radio"
                value="female"
                id="gender-female"
                name="gender"
                ref={femaleGen}
                onChange={handleChange}
                className="h-4 w-4 accent-slate-900 cursor-pointer"
              />
              Female
            </label>

            <label
              htmlFor="gender-others"
              className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
            >
              <input
                type="radio"
                value="others"
                id="gender-others"
                name="gender"
                ref={othersGen}
                onChange={handleChange}
                className="h-4 w-4 accent-slate-900 cursor-pointer"
              />
              Others
            </label>
          </div>
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
