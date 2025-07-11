import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Navbar.css'; // if you use it

const NavBar = () => {
  const location = useLocation();
  const isNavNeeded = location.pathname === '/';
  const isNavColor = location.pathname === '/';

  return (
    <>
      <nav className="navbar">
        <ul className={`flex gap-6 ${isNavColor ? 'home-nav' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/explore">Explore</NavLink></li>
          <li><NavLink to="/fun">Fun</NavLink></li>
          <li><NavLink to="/tips">Tips</NavLink></li>
        </ul>
      </nav>

      <div className={!isNavNeeded ? 'page-content' : ''}>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
