import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import TokenService from '../services/token-service';
import { UserContext } from '../contexts/UserContext';

import '../styles/NavBar.css';

export const Branding = React.memo(function Branding() {
  return (
    <Link className="Branding" to="/">SuperWho?</Link>
  );
});

export const Burger = React.memo(function Burger({ open, setOpen }) {
  return (
    <button
    aria-label='Burger Menu'
    className='Burger'
    onClick={() => setOpen(!open)}
    >
      <div className={open ? 'burger_open' : ''} />
      <div className={open ? 'burger_open' : ''} />
      <div className={open ? 'burger_open' : ''} />
    </button>
  )
});

export const Menu = React.memo(function Menu({ open, setOpen, onLogout, location }) {
  const { pathname } = location;

  const { user } = useContext(UserContext);

  return (
    <div className="Menu">
      <Link className={`Menu__Link${pathname === '/' ? ' Menu__Link-selected' : ''}`} to='/' onClick={() => setOpen(!open)}>Search</Link>
      {(user)
        ? <Link className={`Menu__Link${pathname === '/favorites' ? ' Menu__Link-selected' : ''}`} to='/favorites' onClick={() => setOpen(!open)}>Favorites</Link>
        : ''
      }
      {(user)
        ? <button className="Menu__Link" onClick={onLogout}>Logout</button>
        : <Link className={`Menu__Link${pathname === '/login' ? ' Menu__Link-selected' : ''}`} to='/login' onClick={() => setOpen(!open)}>Login</Link>
      }
      {(user)
        ? ''
        : <Link className={`Menu__Link${pathname === '/register' ? ' Menu__Link-selected' : ''}`} to='/register' onClick={() => setOpen(!open)}>Register</Link>
      }
    </div>
  );
});

export const UserAccount = React.memo(function UserAccount({ open, setOpen }) {
  const { user } = useContext(UserContext);

  if(user) {
    return (
      <div className="UserAccount">
        <p onClick={() => setOpen(!open)}>{user.username} <span className="DownArrow">▼</span></p>
      </div>
    );
  } else {
    return (
      <div className="UserAccount">
        <Link className="UserAccount__Link" to="/login">Login</Link>
        <Link className="UserAccount__Link" to="/register">Register</Link>
      </div>
    );
  }
});

export const UserAccountMenu = React.memo(function UserAccountMenu({ open, setOpen, onLogout }) {
  return (
    <div className="UserAccountMenu">
      <button className="UserAccountMenu__Link" onClick={onLogout}>Logout</button>
    </div>
  );
});

export const Sidebar = React.memo(function Sidebar({ location }) {
  const { pathname } = location;

  const { user } = useContext(UserContext);

  return (
    <div className="Menu">
      <Link className={`Menu__Link${pathname === '/' ? ' Menu__Link-selected' : ''}`} to='/'>Search</Link>
      {(user)
        ? <Link className={`Menu__Link${pathname === '/favorites' ? ' Menu__Link-selected' : ''}`} to='/favorites'>Favorites</Link>
        : ''
      }
    </div>
  );
});

const NavBar = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  const { setUser, setFavorites } = useContext(UserContext);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const onLogout = () => {
    setNavOpen(false);
    setAccountOpen(false);
    TokenService.clearAuthToken();
    setUser(null);
    setFavorites([]);
    props.history.push('/');
  };

  if(props.location.pathname === '/login' || props.location.pathname === '/register') {
    return '';
  }

  if(windowWidth <= 760) {
    return (
      <>
        <CSSTransition
          in={navOpen}
          timeout={300}
          classNames='Menu'
          unmountOnExit
        >
          <Menu open={navOpen} setOpen={setNavOpen} onLogout={onLogout} location={props.location} />
        </CSSTransition>
        <nav className="NavBar">
          <Burger open={navOpen} setOpen={setNavOpen} />
          <Branding />
        </nav>
      </>
    );
  } else {
    return (
      <>
        <Sidebar location={props.location} />
        <nav className="NavBar">
          <Branding />
          <UserAccount open={accountOpen} setOpen={setAccountOpen} />
          <CSSTransition
            in={accountOpen}
            timeout={300}
            classNames='AccountMenu'
            unmountOnExit
          >
            <UserAccountMenu open={accountOpen} setOpen={setAccountOpen} onLogout={onLogout} />
          </CSSTransition>
        </nav>
      </>
    )
  }
};

export default withRouter(NavBar);