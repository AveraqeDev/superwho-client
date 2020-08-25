import React from 'react';

import '../styles/Favorites.css';

const FavoritesHeader = () => {
  return (
    <div className="FavoritesHeader">
      <h2>Favorites</h2>
    </div>
  )
};

const TableControls = () => {
  return (
    <div className="TableControls">
      <p>Showing 10 of 113</p>
      <div className="PageButtons">
        <button className="TableControls__button prev">
          {'< Prev'}
        </button>
        <button className="TableControls__button next">
          {'Next >'}
        </button>
      </div>
    </div>
  );
};

const Favorites = () => {
  return (
    <div className="Favorites">
      <FavoritesHeader />
      <TableControls />
    </div>
  );
};

export default Favorites;