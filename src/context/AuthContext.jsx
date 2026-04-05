import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password, role) => {
    setUser({ name: 'Demo User', email, role, isProfileComplete: true });
    setIsAuthenticated(true);
  };

  const signup = (name, email, password, role) => {
    setUser({ name, email, role, isProfileComplete: false });
    setIsAuthenticated(true);
  };

  const completeProfile = () => {
    setUser((prev) => ({ ...prev, isProfileComplete: true }));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, completeProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
