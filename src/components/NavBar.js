import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../styles/NavBar.css';

const Branding = () => {
  return (
    <h1 className="Branding">SuperWho?</h1>
  );
};

const Burger = ({ open, setOpen }) => {
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
};

const Menu = ({ open, setOpen }) => {
  return (
    <div className="Menu">
      <p className="Menu__Link">Search</p>
      <p className="Menu__Link">Favorites</p>
      <p className="Menu__Link">Profile</p>
      <p className="Menu__Link">Logout</p>
    </div>
  );
};

const UserAccount = ({ open, setOpen }) => {
  
  return (
    <div className="UserAccount">
      <p onClick={() => setOpen(!open)}>username <span className="DownArrow">▼</span></p>
    </div>
  );
}

const UserAccountMenu = ({ open, setOpen }) => {
  return (
    <div className="UserAccountMenu">
      <button onClick={() => setOpen(!open)}>Profile</button>
      <hr className="seperator"></hr>
      <button onClick={() => setOpen(!open)}>Logout</button>
    </div>
  );
}

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
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
      <nav className="NavBar">
        <Burger open={navOpen} setOpen={setNavOpen} />
        <CSSTransition
          in={navOpen}
          timeout={300}
          classNames='Menu'
          unmountOnExit
        >
          <Menu open={navOpen} setOpen={setNavOpen} />
        </CSSTransition>
        <Branding />
      </nav>
    );
  } else {
    return (
      <nav className="NavBar">
        <Branding />
        <UserAccount open={accountOpen} setOpen={setAccountOpen} />
        <CSSTransition
          in={accountOpen}
          timeout={300}
          classNames='AccountMenu'
          unmountOnExit
        >
          <UserAccountMenu open={accountOpen} setOpen={setAccountOpen} />
        </CSSTransition>
      </nav>
    )
  }
};

export default NavBar;