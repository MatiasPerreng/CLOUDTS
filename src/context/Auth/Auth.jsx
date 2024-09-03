// context/Auth/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        userName: null,
    });

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (loggedUser) {
            setAuthState({
                isAuthenticated: true,
                userName: loggedUser.userName,
            });
        }
    }, []);

    const login = (userData) => {
        setAuthState({
            isAuthenticated: true,
            userName: userData.userName,
        });
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            userName: null,
        });
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
