// App.js
import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Settings from './pages/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Bin from './pages/Bin/Bin';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
      <Router>
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bin" element={<Bin />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    );
  };
  
  export default App;