import React, { useContext } from 'react';
import Table from '../components/Table';

import { UserContext } from '../contexts/UserContext';

import '../styles/Favorites.css';

const FavoritesHeader = React.memo(function FavoritesHeader() {
  return (
    <div className="FavoritesHeader">
      <h2>Favorites</h2>
    </div>
  )
});

const Favorites = () => {
  const { favorites } = useContext(UserContext);
  return (
    <div className="Favorites">
      <FavoritesHeader />
      <Table data={favorites} />
    </div>
  );
};

export default Favorites;