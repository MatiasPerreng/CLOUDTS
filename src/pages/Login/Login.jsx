// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import users from '../../data/users.json'; // Asegúrate de que la ruta sea correcta

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Usa el hook useAuth para acceder a la función de login
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Encuentra el usuario en el archivo JSON
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // Llama a la función de login del contexto
            login({ userName: username, role: user.role });
            navigate('/'); // Redirige al usuario a la página principal después del login
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
