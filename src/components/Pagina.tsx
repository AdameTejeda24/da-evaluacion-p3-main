import React from 'react';
import galeriaImg from '../assets/img1.jpg'; 

interface Props {
  titulo: string;
}

const Pagina = ({ titulo }: Props) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">{titulo}</h1>
    <p>
      Bienvenido a la sección de <strong>{titulo}</strong>. Aquí encontrarás
      información relevante sobre {titulo.toLowerCase()}.
    </p>

    {titulo === 'Galería' && (
      <img src={galeriaImg} alt="Galería" className="mt-4 w-1/2 rounded" />
    )}
  </div>
);

export default Pagina;
