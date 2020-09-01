import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import TokenService from '../services/token-service';
import { UserContext } from '../contexts/UserContext';
import { Input, Button } from '../components/Utils';

import  UserApiService from '../services/user-api-service';

import '../styles/Login.css';
import { Link } from 'react-router-dom';

const SidePanel = React.memo(function SidePanel() {
  return (
    <div className='SidePanel'>
      <h1>SuperWho?</h1>
      <div className="SidePanel__message">
        <h2>Welcome back!</h2>
        <p>We are glad to see you again!  Please login using your username and password!</p>
      </div>
    </div>
  );
});

const LoginForm = React.memo(function LoginForm( { onLogin }) {
  const [error, setError] = useState(null);
  
  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = e.target;

    setError(null);
    UserApiService.loginUser({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = '';
        password.value = '';
        onLogin(res.authToken);
      })
      .catch(error => {
        setError(error.error);
      });
  };
  
  return (
    <form className='LoginForm' onSubmit={onSubmit}>
      <h2 className="Header">Log In</h2>
      <div role='alert'>
        {error && <p className='error'>{error}</p>}
      </div>

      <div className='LoginForm__username-container'>
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
      <div className='LoginForm__password-container'>
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
});

const Login = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { setUser, setFavorites, setError } = useContext(UserContext);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const onLogin = token => {
    const { location, history } = props;
    const destination = (location.state || {}).from || '/';

    TokenService.saveAuthToken(token);
    setUser(TokenService.parseToken(token));
    UserApiService.getUserFavorites()
      .then(favs => {
        setFavorites(favs);
      })
      .catch(setError);

    history.push(destination);
  }

  if(windowWidth <= 760) {
    return (
      <div className='Login'>
        <LoginForm onLogin={onLogin} />
      </div>
    );
  } else {
    return (
      <div className='Login'>
        <SidePanel />
        <LoginForm onLogin={onLogin} />
      </div>
    );
  }
};

export default withRouter(Login);