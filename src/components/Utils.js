import React from 'react';

import '../styles/Utils.css';

export const Input = ({ className, ...props }) => {
  return <input className={['Input', className].join(' ')} {...props} />
};

export const Button = ({ className, ...props }) => {
  return <button className={['Button', className].join(' ')} {...props} />
};