import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { FiFolder, FiFile, FiPlus } from 'react-icons/fi';

const initialData = [
    { id: 1, name: 'Documentos', type: 'folder', children: [] },
    { id: 2, name: 'Imagenes', type: 'folder', children: [] },
    { id: 3, name: 'Presupuesto.xlsx', type: 'file', children: [] },
    { id: 4, name: 'Foto.jpg', type: 'file', children: [] },
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [data, setData] = useState(initialData);
    const [newItemName, setNewItemName] = useState('');
    const [parentId, setParentId] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleFilterChange = (type) => {
        setFilterType(type);
    };

    const handleAddItem = (type) => {
        if (newItemName.trim() === '') return;

        const newItem = {
            id: Date.now(),
            name: newItemName.trim(),
            type,
            children: [],
        };

        if (parentId === null) {
            setData([...data, newItem]);
        } else {
            const addItemToParent = (items) => {
                return items.map(item => {
                    if (item.id === parentId) {
                        return { ...item, children: [...item.children, newItem] };
                    } else if (item.children.length > 0) {
                        return { ...item, children: addItemToParent(item.children) };
                    } else {
                        return item;
                    }
                });
            };

            setData(addItemToParent(data));
        }

        setNewItemName('');
        setParentId(null);
    };

    const renderTree = (items) => {
        return (
            <ul className="tree">
                {items.map(item => (
                    <li key={item.id} className={`search-item ${item.type}`}>
                        {item.type === 'folder' ? <FiFolder /> : <FiFile />} {item.name}
                        {item.type === 'folder' && item.children.length > 0 && (
                            <ul>{renderTree(item.children)}</ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    const filteredData = data.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery);
        const matchesType = filterType === 'all' || item.type === filterType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <main className="main-content flex-grow-1 p-3 bg-light overflow-auto">
                    <h1>Cloud de SOPORTE</h1>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Buscar archivos o carpetas..."
                            className="form-control"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="mb-3 d-flex">
                        <button
                            className={`btn btn-outline-primary me-2 ${filterType === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('all')}
                        >
                            Todos
                        </button>
                        <button
                            className={`btn btn-outline-primary me-2 ${filterType === 'folder' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('folder')}
                        >
                            Carpetas
                        </button>
                        <button
                            className={`btn btn-outline-primary ${filterType === 'file' ? 'active' : ''}`}
                            onClick={() => handleFilterChange('file')}
                        >
                            Archivos
                        </button>
                    </div>

                    <div className="d-flex mb-3">
                        <input
                            type="text"
                            placeholder="Nombre del nuevo archivo o carpeta"
                            className="form-control me-2"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                        />
                        <button
                            className="btn btn-primary me-2"
                            onClick={() => handleAddItem('folder')}
                        >
                            <FiPlus /> Carpeta
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleAddItem('file')}
                        >
                            <FiPlus /> Archivo
                        </button>
                    </div>

                    <div>
                        {filteredData.length > 0 ? (
                            renderTree(filteredData)
                        ) : (
                            <p>No se encontraron resultados.</p>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
