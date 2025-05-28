import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">Senasel</Link>
        <div className="navbar-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/menu">Menu</Link>
          <Link className="nav-link" to="/reservation">Reservation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;