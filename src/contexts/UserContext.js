import React, { createContext, useState, useEffect } from 'react';
import TokenService from '../services/token-service';
import UserApiService from '../services/user-api-service';
import HeroApiService from '../services/hero-api-service';

export const UserContext = createContext({
  user: {},
  favorites: [],
  error: {},
  setUser: () => {},
  setFavorites: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
  hasFavorite: () => {},
  setError: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if(!user && TokenService.hasAuthToken()) {
      setUser(TokenService.parseToken(TokenService.getAuthToken()));
      UserApiService.getUserFavorites().then(favs => {
        setFavorites(favs);
      }).catch(setError);
    }

    if(user && !TokenService.hasAuthToken()) {
      setUser(null);
    }
  }, [user, favorites]);

  const addFavorite = (heroId) => {
    HeroApiService.getById(heroId)
      .then(hero => {
        setFavorites([...favorites, hero]);
        UserApiService.addUserFavorite(heroId)
      })
      .catch(setError);
  }

  const removeFavorite = (heroId) => {
    setFavorites(favorites.map(fav => fav.id !== heroId));
    UserApiService.removeUserFavorite(heroId)
      .catch(setError);
  }

  const hasFavorite = (heroId) => {
    for(let i = 0; i < favorites.length; i++) {
      let hero = favorites[i];
      if(hero.id === heroId) {
        return true;
      }
    }
    return false;
  }

  const value = {
    user,
    favorites,
    error,
    setUser,
    setFavorites,
    addFavorite,
    removeFavorite,
    hasFavorite,
    setError
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};