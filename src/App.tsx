// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Tabla from './components/Tabla';
import Slider from './components/Slider';
import SliderGaleria from './components/SliderGaleria';

const Page = ({ title }: { title: string }) => (
  <div className="p-4 text-lg">
    <h1 className="text-2xl font-bold mb-2">{title}</h1>
    <p>Contenido informativo sobre {title.toLowerCase()}.</p>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
    <Route path="/galeria" element={<SliderGaleria />} />
      <Route path="/" element={<Page title="Inicio" />} />
      <Route path="/nosotros" element={<Page title="Nosotros" />} />
      <Route path="/producto" element={<Tabs />} />
      <Route path="/galeria" element={<Slider />} />
      <Route path="/tabla" element={<Tabla />} />
    </Routes>
  </Router>
);

export default App;
