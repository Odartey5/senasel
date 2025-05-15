import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/reservation">Reservation</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;