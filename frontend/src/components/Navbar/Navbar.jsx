import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-links left">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            HOME
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            SERVICES
          </NavLink>
        </div>

        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Laaz Creative Logo" className="logo-img" />
          </Link>
        </div>

        <div className="nav-links right">
          <NavLink to="/portfolio" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            PORTFOLIO
          </NavLink>
          <NavLink to="/enquire" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            ENQUIRE
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
