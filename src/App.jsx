import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeLoggedOut from './pages/Home/HomeLoggedOut'; // Asegúrate de importar la página deslogueada
import Settings from './pages/Settings/Settings';
import Bin from './pages/Bin/Bin';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './context/Auth/ProtectedRoute';
import { AuthProvider, useAuth } from './context/Auth/Auth'; // Asegúrate de que la ruta sea correcta

const AppContent = () => {
  const { authState } = useAuth(); // Obtén el estado de autenticación del contexto

  return (
    <Routes>
      <Route path="/" element={authState.isAuthenticated ? <Home /> : <HomeLoggedOut />} />
      <Route path="/login" element={<Login />} />
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
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
        <Footer />
        
      </Router>
    </AuthProvider>
  );
};

export default App;
