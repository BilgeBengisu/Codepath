import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">🌍 My Countries App</div>
            <h1 className="logo">MyApp</h1>
            <ul className="nav-links">
                <li><a href="dashboard">Dashboard</a></li>
                <li><a href="search">Search</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </nav>
    );
};

