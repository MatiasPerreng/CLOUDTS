// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">CloudApp</div>
            <ul className="sidebar-menu">
                <Link to="/">Página principal</Link>
                <Link to="/bin">Papelera de reciclaje</Link>
                <Link to="/settings">Configuración</Link>
              
            </ul>
        </aside>
    );
};

export default Sidebar;
