import React from 'react';
import Table from '../components/Table';

import '../styles/Favorites.css';

const FavoritesHeader = React.memo(function FavoritesHeader() {
  return (
    <div className="FavoritesHeader">
      <h2>Favorites</h2>
    </div>
  )
});

const Favorites = () => {
  return (
    <div className="Favorites">
      <FavoritesHeader />
      <Table />
    </div>
  );
};

export default Favorites;