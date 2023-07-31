import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink,
} from 'react-router-dom';

const App = () => (
  <Router>
    <header>
      <div className="logo">
        <img src="/logo.png" alt="App Logo" />
      </div>
      <nav>
        <NavLink to="/" activeClassName="active" />
        <NavLink to="/" activeClassName="active" />
        <NavLink to="/" activeClassName="active" />
      </nav>
    </header>
    <Route exact path="/" component="" />
    <Route exact path="/" component="" />
    <Route exact path="/" component="" />
  </Router>
);

export default App;
