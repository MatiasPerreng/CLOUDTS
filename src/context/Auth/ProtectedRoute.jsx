// src/context/Auth/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth'; 

const ProtectedRoute = ({ element, roles }) => {
    const { authState, loading } = useAuth();

    // Mostrar pantalla de carga si aún no se ha inicializado el estado de autenticación
    if (loading) {
        return <div>Loading...</div>;
    }

    // Verificar si el usuario está autenticado
    if (!authState.isAuthenticated) {
        console.log("Usuario no autenticado, redirigiendo a login");
        return <Navigate to="/login" />;
    }

    // Verificar si el rol del usuario coincide con alguno de los permitidos
    if (roles && !roles.includes(authState.userRole)) {
        console.log("Rol del usuario no autorizado:", authState.userRole);
        return <Navigate to="/unauthorized" />;
    }

    console.log("Usuario autenticado y con rol permitido:", authState.userRole);
    // Renderizar el componente si cumple con las condiciones
    return element;
};

export default ProtectedRoute;
