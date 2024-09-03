import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Bin from './pages/Bin/Bin';
import Login from './pages/Login/Login'; // Importa el componente Login
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './context/Auth/ProtectedRoute';
import { AuthProvider } from './context/Auth/Auth';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas y otras páginas */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="main-layout">
                  <Sidebar />
                  <main className="main-content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route
                        path="/settings"
                        element={
                          <ProtectedRoute
                            roles={['admin']}
                            element={<Settings />}
                          />
                        }
                      />
                      <Route
                        path="/bin"
                        element={
                          <ProtectedRoute
                            roles={['user', 'admin']}
                            element={<Bin />}
                          />
                        }
                      />
                      {/* Puedes agregar más rutas protegidas aquí */}
                    </Routes>
                  </main>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
