import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <ul className="navbar-menu">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>
      <li><Link to="/producto">Producto</Link></li>
      <li><Link to="/galeria">Galería</Link></li>
    </ul>
  </nav>
);

export default Navbar;
