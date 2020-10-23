import React from 'react';

import '../styles/FavoriteButton.css';

const FavoriteButton = ({ heroId }) => {

  const onClick = e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('is_animating');

    e.currentTarget.classList.add('active');
  };

  const onAnimationEnd = e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('is_animating');
  }
  return (
    <span 
      className={'favme'}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
    >♥</span>
  );
};

export default FavoriteButton;