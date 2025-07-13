import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // por defecto true (usuario logeado)

  const logout = () => {
    console.log('Logout llamado - token va a false');
    setToken(false);
  };

  // Agrega un log para ver cuándo cambia el token
  console.log('Token actual:', token);
  
  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);