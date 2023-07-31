import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import './App.css';
import logo from './Assets/logo.png';

import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <Router>
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <NavLink to="/Rockets" activeClassName="active"> Rockets </NavLink>
        <NavLink to="/Missions" activeClassName="active"> Missions </NavLink>
        <NavLink to="/Profile" activeClassName="active"> My Profile </NavLink>
      </nav>
    </header>
    <Routes>
      <Route exact path="/Rockets" component={Rockets} />
      <Route exact path="/Missions" component={Missions} />
      <Route exact path="/Profile" component={Profile} />
    </Routes>
  </Router>
);

export default App;
