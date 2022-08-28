import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="navigation">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/Home">
          Soul Desire Tarot LLC 
          </NavLink>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home">
            Home
            <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Reading">
              Book a Private Reading
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;