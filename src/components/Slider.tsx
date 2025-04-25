
import React, { useState } from 'react';

const imagenes = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg'
];

const Slider = () => {
  const [actual, setActual] = useState(0);

  const siguiente = () => setActual((prev) => (prev + 1) % imagenes.length);
  const anterior = () => setActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="p-4 flex flex-col items-center">
      <img
        src={imagenes[actual]}
        alt={`Imagen ${actual + 1}`}
        className="w-full max-w-xl h-64 object-cover rounded shadow mb-4"
      />
      <div className="flex space-x-4">
        <button onClick={anterior} className="px-4 py-2 bg-blue-500 text-white rounded">Anterior</button>
        <button onClick={siguiente} className="px-4 py-2 bg-blue-500 text-white rounded">Siguiente</button>
      </div>
    </div>
  );
};

export default Slider;
