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
  const { favorites } = useContext(UserContext);
  const { columns } = useContext(ApiContext);
  return (
    <div className="Favorites">
      <FavoritesHeader />
      <Table columns={columns} data={favorites} />
    </div>
  );
};

export default Favorites;