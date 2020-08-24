import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: {},
  favorites: [],
  error: {},
  setUser: () => {},
  setFavorites: () => {},
  setError: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState({});

  const value = {
    user,
    favorites,
    error,
    setUser,
    setFavorites,
    setError
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};