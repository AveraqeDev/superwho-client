import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button } from '../components/Utils';
import { Link } from 'react-router-dom';

import UserApiService from '../services/user-api-service';

import '../styles/Register.css';

export const SidePanel = React.memo(function SidePanel() {
  return (
    <div className='SidePanel'>
      <h1>SuperWho?</h1>
      <div className="SidePanel__message">
        <h2>Hello friend!</h2>
        <p>To get started, please create a username and password!</p>
      </div>
    </div>
  );
});

export const RegisterForm = React.memo(function RegisterForm({ onRegister }) {
  const [error, setError] = useState(null);
  
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, confirmPassword } = e.target;
    
    setError(null);
    if(password.value !== confirmPassword.value) {
      setError('Passwords do not match!');
      return;
    }

    UserApiService.registerUser({
      username: username.value,
      password: password.value
    })
      .then(() => {
        username.value = '';
        password.value = '';
        confirmPassword.value = '';
        onRegister();
      })
      .catch(res => {
        setError(res.error);
      })
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
});

const Register = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const onRegister = () => {
    props.history.push('/login');
  };

  if(windowWidth <= 760) {
    return (
      <div className='Register'>
        <RegisterForm onRegister={onRegister} />
      </div>
    );
  } else {
    return (
      <div className='Register'>
        <SidePanel />
        <RegisterForm onRegister={onRegister} />
      </div>
    );
  }
};

export default withRouter(Register);