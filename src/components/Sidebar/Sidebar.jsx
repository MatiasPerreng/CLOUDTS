import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';

const Sidebar = () => {
    const { user } = useContext(AuthContext);

    return (
        <aside className="sidebar bg-light shadow-sm">
            <div className="sidebar-brand">Menú de opciones</div>
            <ul className="list-unstyled sidebar-menu">
                <li>
                    <Link to="/" className="sidebar-link">Página principal</Link>
                </li>
                {user && user.role === 'admin' && (
                    <>
                        <li>
                            <Link to="/settings" className="sidebar-link">Configuración</Link>
                        </li>
                        <li>
                            <Link to="/admin/dashboard" className="sidebar-link">Dashboard Admin</Link>
                        </li>
                    </>
                )}
                {user && user.role === 'user' && (
                    <>
                        <li>
                            <Link to="/bin" className="sidebar-link">Papelera de reciclaje</Link>
                        </li>
                    </>
                )}
                {!user && (
                    <li>
                        <Link to="/login" className="sidebar-link">Iniciar sesión</Link>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
