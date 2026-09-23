import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000";

const Login = ({ changePage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [prevData, setPrevData] = useState([]);
//   console.log(prevData);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userExists = prevData.find(
      (student) =>
        student.email === formData.email &&
        student.password === formData.password,
    );

    if (!userExists) {
      toast.error("User doesn't exist so please check credentials or signup");
      return;
    }

    try {
      const { data } = await axios.post(`${BASE_URL}/login`, formData);
    //   console.log(data);
      toast("Successfully login");
      setTimeout(() => {
        setFormData({ email: "", password: "" });
        navigate("/authenticated");
        console.log("registered");
      }, 2000);
    } catch (err) {
      console.log("registration failed");
      console.log("Some error occured: ", err);
    }
  };

  const fetchData = async () => {
    const { data } = await await axios.get(`${BASE_URL}/student`);
    // console.log(data);
    setPrevData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Login here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          id="password"
          placeholder="Enter password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={changePage}>Go to Signup</button>
    </div>
  );
};

export default Login;
