import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:5000/student";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [usersData, setUsersData] = useState(null);
  const [currUser, setCurrUser] = useState(() => {
    const saved = localStorage.getItem("details");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const { data } = await axios.get(BASE_URL);
        //   console.log(data);
        setUsersData(data);
      } catch (error) {
        console.log("error while fetching users", error);
      }
    };

    fetchUsersData();
  }, []);

  const loginUser = async (email, password) => {
    try {
      const result = usersData.find((user) => user.email === email);

      if (!result || result.password !== password) {
        console.log("Invalid email or password");
        return { success: false, error: true };
      }

      localStorage.setItem("details", JSON.stringify(result));
      setCurrUser(result);
      console.log("logged in");

      return { success: true, error: false };
    } catch (error) {
      console.log(error);
      return { success: false, error: true };
    }
  };

  const logout = async () => {
    localStorage.removeItem("details");
    setCurrUser(null);
    console.log("user logged out");
  };

  const value = {
    usersData,
    isAuthenticated: Boolean(currUser),
    currUser,
    loginUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside the Authprovider");
  }

  return context;
};
