import React, { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

import '../styles/FavoriteButton.css';

const FavoriteButton = ({ heroId }) => {

  const { user, addFavorite, removeFavorite, hasFavorite } = useContext(UserContext);

  const onClick = e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('is_animating');

    if(hasFavorite(heroId)) {
      removeFavorite(heroId);
      e.currentTarget.classList.remove('active');
    } else {
      addFavorite(heroId);
      e.currentTarget.classList.add('active');
    }
  };

  const onAnimationEnd = e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('is_animating');
  }

  if(user) {
    return (
      <span 
        className={`favme${hasFavorite(heroId) ? ' active' : ''}`}
        onClick={onClick}
        onAnimationEnd={onAnimationEnd}
      >♥</span>
    );
  } else {
    return '';
  }
};

export default FavoriteButton;