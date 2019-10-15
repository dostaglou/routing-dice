import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="border-bottom">
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/history">History</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="options">Options</NavLink></li>
    </ul>
  </header>
)

export default Header
