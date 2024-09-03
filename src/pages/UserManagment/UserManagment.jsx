// src/pages/UserManagement/UserManagement.jsx
import React, { useState } from 'react';
import './UserManagment.css';
import { useAuth } from '../../context/Auth/Auth';

const UserManagement = () => {
    const { users, setUsers } = useAuth(); // Asegúrate de que tu contexto maneje la lista de usuarios
    const [newUser, setNewUser] = useState({ userName: '', password: '', role: 'user' });
    const [editingUser, setEditingUser] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, { ...newUser, id: Date.now() }]);
        setNewUser({ userName: '', password: '', role: 'user' });
    };

    const handleEditUser = (id) => {
        const userToEdit = users.find(user => user.id === id);
        setEditingUser(userToEdit);
        setNewUser({ userName: userToEdit.userName, password: userToEdit.password, role: userToEdit.role });
    };

    const handleUpdateUser = () => {
        setUsers(users.map(user => user.id === editingUser.id ? newUser : user));
        setEditingUser(null);
        setNewUser({ userName: '', password: '', role: 'user' });
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="user-management-container">
            <h2>Gestión de Usuarios</h2>
            <div className="user-form">
                <input
                    type="text"
                    name="userName"
                    placeholder="Nombre de usuario"
                    value={newUser.userName}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
                <select name="role" value={newUser.role} onChange={handleInputChange}>
                    <option value="user">Usuario</option>
                    <option value="admin">Admin</option>
                </select>
                {editingUser ? (
                    <button onClick={handleUpdateUser}>Actualizar Usuario</button>
                ) : (
                    <button onClick={handleAddUser}>Agregar Usuario</button>
                )}
            </div>
            <div className="user-list">
                <h3>Lista de Usuarios</h3>
                <ul>
                    {users?.map(user => (
                        <li key={user.id}>
                            {user.userName} - {user.role}
                            <button onClick={() => handleEditUser(user.id)}>Editar</button>
                            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserManagement;
