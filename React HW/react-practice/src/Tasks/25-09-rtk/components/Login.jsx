import React, { useState } from "react";
import { setFormData } from "../features/login/loginSlice";

const Login = () => {
  const [formdata, serFormdata] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()

    
  }
  return (
    <div>
      <form>
        <input type="text"name='username' onChange={handleChange}/>
        <input type="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
