import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
<<<<<<< HEAD
import logo from '../assets/senasel-logo.jpg'; // Import the logo imag
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const ThemeToggle = ({ toggleTheme, isDarkMode }) => (
  <IconButton onClick={toggleTheme} color="inherit">
    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
  </IconButton>
);

=======
import logo from '../images/senasel-logo1.jpg'; // Import the logo image
>>>>>>> 5d2e3f2690cb7803c31297984372418194ee152a

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Senasel Logo" className="nav-logo" />
          <span>Senasel</span>
        </Link>
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