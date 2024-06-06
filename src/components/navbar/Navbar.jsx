// src/Navbar.js
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="path/to/your/logo.png" alt="Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#campus">Campus</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contactus">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
