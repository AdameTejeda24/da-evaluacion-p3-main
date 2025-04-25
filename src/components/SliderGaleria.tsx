
import React, { useEffect, useState } from 'react';

interface Tanque {
  tanque: string;
  nacion: string;
  precio: string;
  imagen: string;
}

const SliderGaleria = () => {
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

  if (datos.length === 0) return <p className="p-4">Cargando galería...</p>;

  const item = datos[actual];

  return (
    <div className="p-4 flex flex-col items-center md:flex-row md:items-start md:space-x-8">
      <img
        src={`/${item.imagen}`}
        alt={item.tanque}
        className="w-full max-w-md h-64 object-cover rounded shadow mb-4 md:mb-0"
      />
      <div className="text-left space-y-2 text-lg">
        <p><strong>Tanque:</strong> {item.tanque}</p>
        <p><strong>Nación:</strong> {item.nacion}</p>
        <p><strong>Precio:</strong> {item.precio}</p>
        <div className="flex space-x-2 mt-4">
          <button onClick={anterior} className="px-4 py-2 bg-blue-600 text-white rounded">Anterior</button>
          <button onClick={siguiente} className="px-4 py-2 bg-blue-600 text-white rounded">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default SliderGaleria;
