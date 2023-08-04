import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Nav.css';
import logo from '../assets/logo.png';

const Nav = () => (
  <nav>
    <NavLink
      to="/"
    >
      <header>
        <img src={logo} alt="logo" />
        <h1 className="nav-heading">Space Travelers&apos; Hub</h1>
      </header>
    </NavLink>
    <ul className="nav-ul">
      <li>
        <NavLink
          to="/"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="profile-link"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
