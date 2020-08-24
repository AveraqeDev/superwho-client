import React, { useState, useEffect } from 'react';
import { slide as SlideMenu } from 'react-burger-menu';

import '../styles/NavBar.css';
import { CSSTransition } from 'react-transition-group';

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

const UserAccount = () => {
  
  return (
    <div className="UserAccount">
      <p>username <span className="DownArrow">▼</span></p>
    </div>
  );
}

const NavBar = () => {
  const [open, setOpen] = useState(false);
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
        <Burger open={open} setOpen={setOpen} />
        <CSSTransition
          in={open}
          timeout={300}
          classNames='Menu'
          unmountOnExit
        >
          <Menu open={open} setOpen={setOpen} />
        </CSSTransition>
        <Branding />
      </nav>
    );
  } else {
    return (
      <nav className="NavBar">
        <Branding />
        <UserAccount />
      </nav>
    )
  }
};

export default NavBar;