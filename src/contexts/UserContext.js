import React, { createContext, useState, useEffect } from 'react';
import TokenService from '../services/token-service';

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

  const parseToken = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      setError(e);
      return null;
    }
  };

  useEffect(() => {
    if(!user.id && TokenService.hasAuthToken()) {
      setUser(parseToken(TokenService.getAuthToken()));
    }
  }, [user.id, favorites]);

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