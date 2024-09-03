import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar bg-light shadow-sm">
            <div className="sidebar-brand">PABLO SE LA COME</div>
            <ul className="list-unstyled sidebar-menu">
                <li>
                    <Link to="/" className="sidebar-link">Página principal</Link>
                </li>
                <li>
                    <Link to="/bin" className="sidebar-link">Papelera de reciclaje</Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-link">Configuración</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
