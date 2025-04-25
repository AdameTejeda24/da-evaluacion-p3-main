
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex space-x-4">
    <Link to="/">Inicio</Link>
    <Link to="/nosotros">Nosotros</Link>
    <Link to="/producto">Producto</Link>
    <Link to="/galeria">Galería</Link>
  </nav>
);

export default Navbar;
