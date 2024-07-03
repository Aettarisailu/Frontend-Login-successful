// src/components/Navbar/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">User Authentication</h1>        
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/register" className="nav-link">Register</Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li>
              <Link to="/forgot-password/" className="nav-link">Forgot Password</Link>
            </li>
          </ul>
        </nav>              
      </div>
    </header>
  );
};

export default Navbar;
