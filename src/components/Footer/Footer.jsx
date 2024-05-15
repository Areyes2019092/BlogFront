import React from 'react'
import "./footer.css"; // Importa tu archivo de estilos CSS

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Sobre Mi</h3>
          <p>
            Angel Reyes <br></br>
            2019092 <br></br>
            Sexto B
          </p>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://github.com/Areyes2019092">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
        <h3>Links</h3>
          <ul>
            <li><a href="/taller">Taller</a></li>
            <li><a href="/tegnologia">Tegnologia</a></li>
            <li><a href="/practica">Practica Supervisada</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All rights reserved. Centro Educativo Tecnico Laboral Kinal</p>
      </div>
    </footer>
  );
};
