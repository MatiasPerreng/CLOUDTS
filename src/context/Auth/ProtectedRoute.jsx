// src/context/Auth/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth'; 

const ProtectedRoute = ({ element, roles }) => {
    const { authState } = useAuth();

    if (!authState.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Si se especifican roles y el rol del usuario no está en la lista, se redirige
    if (roles && !roles.includes(authState.userRole)) {
        return <Navigate to="/unauthorized" />;
    }

    return element;
};

export default ProtectedRoute;
