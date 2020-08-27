import React, { createContext, useState, useEffect } from 'react';
import TokenService from '../services/token-service';
import UserApiService from '../services/user-api-service';

export const UserContext = createContext({
  user: {},
  favorites: [],
  error: {},
  setUser: () => {},
  setFavorites: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
  setError: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {

    const fetchFavorites = async () => {
      try {
        const favs = UserApiService.getUserFavorites(user.id);
        setFavorites(favs);
      } catch (error) {
        setError(error);
      }
    };

    if(!user && TokenService.hasAuthToken()) {
      setUser(TokenService.parseToken(TokenService.getAuthToken()));
      fetchFavorites();
    }

    if(!!favorites && (!user && !TokenService.hasAuthToken())) {
      setFavorites([]);
    }
  }, [user, favorites]);

  const addFavorite = (hero) => {
    setFavorites([...favorites, hero]);
    UserApiService.addUserFavorite(user.id, hero.id)
      .catch(setError);
  }

  const removeFavorite = (heroId) => {
    setFavorites(favorites.map(fav => fav.id !== heroId));
    UserApiService.removeUserFavorite(user.id, heroId)
      .catch(setError);
  }

  const value = {
    user,
    favorites,
    error,
    setUser,
    setFavorites,
    addFavorite,
    removeFavorite,
    setError
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};