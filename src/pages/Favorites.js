import React, { useContext } from 'react';
import Table from '../components/Table';

import { UserContext } from '../contexts/UserContext';

import '../styles/Favorites.css';
import { ApiContext } from '../contexts/ApiContext';

const FavoritesHeader = React.memo(function FavoritesHeader() {
  return (
    <div className="FavoritesHeader">
      <h2>Favorites</h2>
    </div>
  )
});

const Favorites = () => {
  const { favorites, error } = useContext(UserContext);
  const { columns } = useContext(ApiContext);
  return (
    <div className="Favorites">
      <FavoritesHeader />
      {!error 
        ? 
          (favorites.length > 0 
            ? <Table columns={columns} data={favorites} /> 
            : <h2>Looks like you don't have any favorites!</h2>
          ) 
        : <h2>{error.error}</h2>
      }
    </div>
  );
};

export default Favorites;