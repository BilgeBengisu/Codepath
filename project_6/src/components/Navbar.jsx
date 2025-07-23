// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">📚 Open Library Explorer</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Dashboard</Link>
          {/* You can add more links later */}
        </div>
      </div>
    </nav>
  );
};
