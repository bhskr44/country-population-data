import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => (
  <header>
    <div className="nav-container">
      <div className="logo">
        <h1>Air Quality Index</h1>
      </div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  </header>
);

export default header;
