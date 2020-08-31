import React from 'react';

import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="Loader">
      <div className="Loader__bounce1" />
      <div className="Loader__bounce2" />
      <div className="Loader__bounce3" />
    </div>
  );
}

export default Loader;