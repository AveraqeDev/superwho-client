import React, { useState, useEffect } from 'react';
import { Input, Button } from '../components/Utils';
import { Link } from 'react-router-dom';

import '../styles/Register.css';

const SidePanel = () => {
  return (
    <div className='SidePanel'>
      <h1>SuperWho?</h1>
      <div className="SidePanel__message">
        <h2>Hello friend!</h2>
        <p>To get started, please create a username and password!</p>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const [error, setError] = useState(null);
  
  const onSubmit = e => {
    e.preventDefault();
    setError(null);
    const { username, password, confirmPassword } = e.target;

    console.log(username.value, password.value, confirmPassword.value);
  };
  
  return (
    <form className='RegisterForm' onSubmit={onSubmit}>
      <h2 className="Header">Sign Up</h2>
      <div role='alert'>
        {error && <p className='error'>{error}</p>}
      </div>

      <div className='RegisterForm__username-container'>
        <label htmlFor='RegisterForm__username'>
          Username
        </label>
        <Input 
          required
          name='username'
          id='RegisterForm__username'
          placeholder='Enter Your Username'
        />
      </div>
      <div className='RegisterForm__password-container'>
        <label htmlFor='RegisterForm__password'>
          Password
        </label>
        <Input 
          required
          name='password'
          type='password'
          id='RegisterForm__password'
          placeholder='Enter Your Password'
        />
      </div>
      <div className='RegisterForm__confirmPassword-container'>
        <label htmlFor='RegisterForm__confirmPassword'>
          Confirm Password
        </label>
        <Input 
          required
          name='confirmPassword'
          type='password'
          id='RegisterForm__confirmPassword'
          placeholder='Re-enter Your Password'
        />
      </div>

      <Button className='RegisterForm__button' type='submit'>
        Sign Up
      </Button>
      <p className='RegisterForm__login'>Already have an account? <Link className='RegisterForm__login-link' to='/login'>Log In</Link></p>
    </form>
  );
};

const Register = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  if(windowWidth <= 760) {
    return (
      <div className='Register'>
        <RegisterForm />
      </div>
    );
  } else {
    return (
      <div className='Register'>
        <SidePanel />
        <RegisterForm />
      </div>
    );
  }
};

export default Register;