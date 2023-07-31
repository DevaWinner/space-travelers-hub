import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import './App.css';
import logo from './Assets/logo.png';

import Rockets from './components/Rockets';

const App = () => (
  <Router>
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <NavLink to="/Rockets" activeClassName="active"> Rockets </NavLink>
        <NavLink to="/" activeClassName="active" />
        <NavLink to="/" activeClassName="active" />
      </nav>
    </header>
    <Routes>
      <Route exact path="/Rockets" component={Rockets} />
      <Route exact path="/" component="" />
      <Route exact path="/" component="" />
    </Routes>
  </Router>
);

export default App;
