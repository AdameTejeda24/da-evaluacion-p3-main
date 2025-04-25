import React, { useEffect, useState } from 'react';
import './SliderGaleria.css';

interface Tanque {
  tanque: string;
  nacion: string;
  precio: string;
  imagen: string;
}

const SliderGaleria: React.FC = () => {
  const [datos, setDatos] = useState<Tanque[]>([]);
  const [actual, setActual] = useState(0);

  useEffect(() => {
    fetch('/datos.json')
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error('Error al cargar datos:', err));
  }, []);

  const siguiente = () => setActual((prev) => (prev + 1) % datos.length);
  const anterior = () => setActual((prev) => (prev - 1 + datos.length) % datos.length);

  if (datos.length === 0) return <p className="slider-loading">Cargando galería...</p>;

  const item = datos[actual];

  return (
    <div className="slider-galeria">
      <img
        src={`/${item.imagen}`}
        alt={item.tanque}
        className="slider-img"
      />
      <div className="slider-info">
        <p><strong>Tanque:</strong> {item.tanque}</p>
        <p><strong>Nación:</strong> {item.nacion}</p>
        <p><strong>Precio:</strong> {item.precio}</p>
        <div className="slider-botones">
          <button onClick={anterior} className="slider-btn">Anterior</button>
          <button onClick={siguiente} className="slider-btn">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default SliderGaleria;
