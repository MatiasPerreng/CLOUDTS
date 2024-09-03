
import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './HomeLoggedOut.css';

const HomeLoggedOut = () => {
    return (
        <div className="home-logged-out">
            <Navbar />
            <main className="main-content mb-5">
                <div className="lobby">
                    {/* <img src="imgs/Manuel.jpg" alt="Descripción de la imagen" width="250" height="170" />
                    <h3 className='mb-4'>TENÉS CREDENCIALES PARA PASAR PAPÁ?</h3> */}
                    <h1>Bienvenido a TodoSoft CLOUD</h1>
                    <p>Inicia sesión para acceder a tus archivos y carpetas.</p>
                    <p>En nuestra plataforma podrás gestionar todos tus documentos y colaborar con tu equipo de manera eficiente.</p>
                    <a href="/login" className="btn btn-primary">Iniciar sesión</a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HomeLoggedOut;
