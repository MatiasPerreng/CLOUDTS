// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">TodoSoft CLOUD</div>
                <div className="navbar-links">
                    <div className="user-profile">
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                        <span className="user-name">User Name</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;