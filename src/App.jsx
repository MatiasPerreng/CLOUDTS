// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeLoggedOut from './pages/Home/HomeLoggedOut'; // Página deslogueada
import Settings from './pages/Settings/Settings';
import Bin from './pages/Bin/Bin';
import Login from './pages/Login/Login';
import UserManagement from './pages/UserManagment/UserManagment';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ProtectedRoute from './context/Auth/ProtectedRoute';
import { AuthProvider, useAuth } from './context/Auth/Auth'; // Asegúrate de que la ruta sea correcta

const Layout = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <div className="main-content">
      <Sidebar />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

const AppContent = () => {
  const { authState } = useAuth(); // Obtén el estado de autenticación del contexto

  return (
    <Routes>
      <Route path="/" element={authState.isAuthenticated ? <Layout><Home /></Layout> : <HomeLoggedOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-management" element={
        <ProtectedRoute roles={['admin']}>
          <Layout><UserManagement /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute roles={['admin']}>
          <Layout><Settings /></Layout>
        </ProtectedRoute>
      } />
      <Route path="/bin" element={
        <ProtectedRoute roles={['user', 'admin']}>
          <Layout><Bin /></Layout>
        </ProtectedRoute>
      } />
      {/* Puedes agregar más rutas protegidas aquí */}
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
