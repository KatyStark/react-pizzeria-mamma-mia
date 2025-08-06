import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }, []);

  const loginUser = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    setToken(data.token);
    setEmail(data.email);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  const registerUser = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Register failed");

    const data = await response.json();
    setToken(data.token);
    setEmail(data.email);
    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
  };

  const logoutUser = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) return null;

    const data = await response.json();
    return data;
  };

  return (
    <UserContext.Provider
      value={{ token, email, loginUser, registerUser, logoutUser, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
