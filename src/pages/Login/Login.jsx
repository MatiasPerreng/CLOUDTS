// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Usa el hook useAuth para acceder a la función de login
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userData = { userName: username }; // Ajusta según cómo se maneje el usuario
        await login(userData); // Llama a la función de login
        navigate('/'); // Redirige al usuario a la página principal después del login
      } catch (error) {
        console.error('Login failed:', error);
        // Maneja el error de login aquí (e.g., mostrar un mensaje de error)
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
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>
    );
};

export default Login;
