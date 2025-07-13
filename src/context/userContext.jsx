import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // por defecto true (usuario logeado)

  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook para usarlo fácilmente
export const useUser = () => useContext(UserContext);