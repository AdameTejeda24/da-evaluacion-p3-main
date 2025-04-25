import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Tabla from './components/Tabla';
import Slider from './components/Slider';
import SliderGaleria from './components/SliderGaleria';
import Pagina from './components/Pagina'; // ⬅️ Importá tu componente con CSS
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Pagina titulo="Inicio" />} />
      <Route path="/nosotros" element={<Pagina titulo="Nosotros" />} />
      <Route path="/producto" element={<Pagina titulo="Producto" />} />
      <Route path="/galeria" element={<SliderGaleria />} />
      <Route path="/tabla" element={<Tabla />} />
    </Routes>
  </Router>
);

export default App;
