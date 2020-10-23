import React, { useMemo } from 'react';
import Table from '../components/Table';

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
  const columns = useMemo(() => config.COLUMNS, []);
  return (
    <div className="Favorites">
      <FavoritesHeader />
      <Table columns={columns} data={[]} /> 
    </div>
  );
};

export default Favorites;