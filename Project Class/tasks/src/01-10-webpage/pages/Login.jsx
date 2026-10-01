import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:5000/student";
const Login = () => {
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchdata = async () => {
      const { data } = await axios.get(BASE_URL);
      //   console.log(data);
      setUserData(data);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.email === "" || formData.password === "") {
        console.log("please provide details");
        return;
      }
      
      fetchdata()
      const result = userData.find((user) => user.email === formData.email);
      console.log(result || undefined);
      //   const response = await axios.post(BASE_URL, formData);
      //   console.log(response);
    } catch (error) {
      console.log(error);
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

        <Link to={"/register"}>Go to Register</Link>
      </form>
    </div>
  );
};

export default Login;
