import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TodoSoft CLOUD</a>
                <div className="d-flex">
                    <div className="navbar-profile d-flex align-items-center">
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon me-2" />
                        <span className="profile-name">User Name</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
