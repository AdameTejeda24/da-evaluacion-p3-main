import React, { useState } from 'react';


const imagenes = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg'
];

const Slider: React.FC = () => {
  const [actual, setActual] = useState(0);

  const siguiente = () => setActual((prev) => (prev + 1) % imagenes.length);
  const anterior = () => setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="slider-container">
      <img
        src={imagenes[actual]}
        alt={`Imagen ${actual + 1}`}
        className="slider-img"
      />
      <div className="slider-buttons">
        <button onClick={anterior} className="slider-btn">Anterior</button>
        <button onClick={siguiente} className="slider-btn">Siguiente</button>
      </div>
      <p className="slider-info">Imagen {actual + 1} de {imagenes.length}</p>
    </div>
  );
};

export default Slider;
