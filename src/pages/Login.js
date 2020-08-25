import React, { useState, useEffect } from 'react';

import { Input, Button } from '../components/Utils';

import '../styles/Login.css';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <div className='SidePanel'>
      <h1>SuperWho?</h1>
      <div className="SidePanel__message">
        <h2>Welcome back!</h2>
        <p>We are glad to see you again!  Please login using your username and password!</p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [error, setError] = useState(null);
  
  const onSubmit = e => {
    e.preventDefault();
    setError(null);
    const { username, password } = e.target;

    console.log(username, password);
  };
  
  return (
    <form className='LoginForm' onSubmit={onSubmit}>
      <h2 className="Header">Log In</h2>
      <div role='alert'>
        {error && <p className='error'>{error}</p>}
      </div>

      <div className='username'>
        <label htmlFor='LoginForm__username'>
          Username
        </label>
        <Input 
          required
          name='username'
          id='LoginForm__username'
          placeholder='Enter Your Username'
        />
      </div>
      <div className='password'>
        <label htmlFor='LoginForm__password'>
          Password
        </label>
        <Input 
          required
          name='password'
          type='password'
          id='LoginForm__password'
          placeholder='Enter Your Password'
        />
      </div>

      <Button className='LoginForm__button' type='submit'>
        Login
      </Button>
      <p className='LoginForm__signup'>Don't have an account? <Link className='LoginForm__signup-link' to='/register'>Sign Up</Link></p>
    </form>
  );
};

const Login = () => {
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
      <div className='Login'>
        <LoginForm />
      </div>
    );
  } else {
    return (
      <div className='Login'>
        <SidePanel />
        <LoginForm />
      </div>
    );
  }
};

export default Login;