import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.email === "" || formData.password === "") {
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/student",
        formData,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full">
      <h1>Register</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-mist-500 rounded-2xl p-3 flex flex-col gap-2"
      >
        <div>
          <label htmlFor="email">
            Enter email:
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white rounded px-1 py-1"
              placeholder="enter email"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Enter password:
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-white rounded px-1 py-1"
              placeholder="enter password"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-1.5 bg-red-400 hover:bg-red-300 cursor-pointer"
        >
          Register
        </button>
      </form>

      <Link to={"/login"}>Go to Login</Link>
    </div>
  );
};

export default Register;
