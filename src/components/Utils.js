import React from 'react';

import '../styles/Utils.css';

export const Input = React.memo(function Input({ className, ...props }) {
  return <input className={['Input', className].join(' ')} {...props} />
});

export const Button = React.memo(function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
});