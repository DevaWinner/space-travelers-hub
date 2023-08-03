import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Nav.css';
import logo from '../assets/logo.PNG';

const Nav = () => (
  <>
    <nav className="navbar">
      <NavLink
        to="/"
      >
        <header className="navbar-header">
          <img src={logo} alt="logo" />
          <h1 className="nav-heading">Space Travelers Hub</h1>
        </header>
      </NavLink>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink
            to="/"
          >
            Rockets
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/missions"
          >
            Missions
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink
            to="/profile"
            className="profile-link"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr />
  </>
);

export default Nav;
