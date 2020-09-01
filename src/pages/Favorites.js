import React, { useContext, useMemo } from 'react';
import Table from '../components/Table';

import { UserContext } from '../contexts/UserContext';

import config from '../config';

import '../styles/Favorites.css';

export const FavoritesHeader = React.memo(function FavoritesHeader() {
  return (
    <div className="FavoritesHeader">
      <h2>Favorites</h2>
    </div>
  )
});

const Favorites = () => {
  const { favorites, error } = useContext(UserContext);
  const columns = useMemo(() => config.COLUMNS, []);
  return (
    <div className="Favorites">
      <FavoritesHeader />
      {!error 
        ? 
          (favorites.length > 0 
            ? <Table columns={columns} data={favorites} /> 
            : (
              <div className="DefaultText">
                <h2>Uh Oh!</h2>
                <p>Looks like you don't have any favorites yet! Add to your favorites by clicking the heart icon next to any row on the search page!</p>
              </div>
            )
          ) 
        : <h2>{error.message}</h2>
      }
    </div>
  );
};

export default Favorites;