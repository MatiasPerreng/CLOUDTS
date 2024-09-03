// components/Navbar/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useAuth } from '../../context/Auth/Auth';

const Navbar = () => {
    const { authState, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TodoSoft CLOUD</a>
                <div className="d-flex">
                    {authState.isAuthenticated ? (
                        <div className="navbar-profile d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserCircle} className="user-icon me-2" />
                            <span className="profile-name">{authState.userName}</span>
                            <button onClick={logout} className="btn btn-outline-light ms-3">Cerrar sesión</button>
                        </div>
                    ) : (
                        <a href="/login" className="btn btn-outline-light">Iniciar sesión</a>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
