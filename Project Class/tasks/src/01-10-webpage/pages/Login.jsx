import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useAuth();

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      console.log("please provide details");
      return;
    }

    const result = await loginUser(formData.email, formData.password);

    if (result.success) {
      navigate("/products");
      console.log("user logged in");
      return;
    }

    if (result.error) {
      console.log("please enter correct details");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen w-full">
      <h1>Login</h1>

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
          Login
        </button>
      </form>
      <Link to={"/register"}>Go to Register</Link>
    </div>
  );
};

export default Login;
