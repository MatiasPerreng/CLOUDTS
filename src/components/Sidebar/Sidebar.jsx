// components/Sidebar/Sidebar.jsx
import React from 'react';
import { useAuth } from '../../context/Auth/Auth';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
    const { authState } = useAuth();

    return (
        <aside className="sidebar bg-light shadow-sm">
            <div className="sidebar-brand">Menú de opciones</div>
            <ul className="list-unstyled sidebar-menu">
                <li>
                    <Link to="/" className="sidebar-link">Página principal</Link>
                </li>
                {/* Mostrar la opción de Gestión de usuarios solo para administradores */}
                {authState.userRole === 'admin' && (
                    <li>
                        <Link to="/user-management" className="sidebar-link">Gestión de usuarios</Link>
                    </li>
                )}
                <li>
                    <Link to="/bin" className="sidebar-link">Papelera de reciclaje</Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-link">Configuración</Link>
                </li>
                {authState.isAuthenticated && (
                    <li>
                        <Link to="/profile" className="sidebar-link">Perfil</Link>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
