import React from 'react';

import '../styles/Badge.css';

const Badge = ({ values }) => {
  return (
    <>
      {values.split(',').map((value, idx) => {
        return (
          <span key={idx} className="badge">
            {value}
          </span>
        );
      })}
    </>
  )
};

export default Badge;