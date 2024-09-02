import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-primary text-white">
            <div className="container text-center py-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} CLOUD Soporte - Implantación</p>
            </div>
        </footer>
    );
};

export default Footer;
