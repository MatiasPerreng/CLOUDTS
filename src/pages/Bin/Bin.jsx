// Bin.jsx

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Bin.css'; // Asegúrate de tener los estilos para la página Bin

import { FiFolder, FiFile, FiRefreshCcw, FiTrash2 } from 'react-icons/fi'; // Importa íconos modernos

const mockData = [
    { id: 1, name: 'Documento eliminado.pdf', type: 'file' },
    { id: 2, name: 'Foto eliminada.jpg', type: 'file' },
    { id: 3, name: 'Carpeta eliminada', type: 'folder' },
    // Agrega más elementos según sea necesario
];

const Bin = () => {
    const [deletedItems, setDeletedItems] = useState(mockData);

    const handleRestore = (id) => {
        // Lógica para restaurar el elemento
        setDeletedItems(deletedItems.filter(item => item.id !== id));
    };

    const handleDeletePermanently = (id) => {
        // Lógica para eliminar permanentemente el elemento
        setDeletedItems(deletedItems.filter(item => item.id !== id));
    };

    return (
        <div className="bin">
            <Navbar />
            <div className="bin-content">
                <h1>Papelera de Reciclaje</h1>
                <p>Aquí puedes restaurar o eliminar permanentemente los elementos eliminados.</p>
                <div className="bin-items">
                    {deletedItems.length > 0 ? (
                        <ul>
                            {deletedItems.map(item => (
                                <li key={item.id} className={`bin-item ${item.type}`}>
                                    <div className="item-details">
                                        {item.type === 'folder' ? <FiFolder /> : <FiFile />} {item.name}
                                    </div>
                                    <div className="item-actions">
                                        <button onClick={() => handleRestore(item.id)} className="action-button restore-button">
                                            <FiRefreshCcw /> Restaurar
                                        </button>
                                        <button onClick={() => handleDeletePermanently(item.id)} className="action-button delete-button">
                                            <FiTrash2 /> Eliminar Permanentemente
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay elementos en la papelera de reciclaje.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Bin;