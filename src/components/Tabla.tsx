import React, { useEffect, useState } from 'react';

interface TanqueData {
  tanque: string;
  nacion: string;
  precio: string;
}

const Tabla = () => {
  const [datos, setDatos] = useState<TanqueData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/datos.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los datos');
        return res.json();
      })
      .then((data) => setDatos(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-500 p-4">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Datos de Tanques</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Tanque</th>
            <th className="border px-4 py-2">Nación</th>
            <th className="border px-4 py-2">Precio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{item.tanque}</td>
              <td className="border px-4 py-2">{item.nacion}</td>
              <td className="border px-4 py-2">{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

