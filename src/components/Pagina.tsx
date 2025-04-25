import React from 'react';
import galeriaImg from '../assets/img1.jpg';
import './Pagina.css'; // ✅ Importa el CSS

interface Props {
  titulo: string;
}

const Pagina = ({ titulo }: Props) => (
  <div className="pagina-contenedor">
    <h1 className="pagina-titulo">{titulo}</h1>
    <p className="pagina-texto">
      Bienvenido a la sección de <strong>{titulo}</strong>. Aquí encontrarás
      información relevante sobre {titulo.toLowerCase()}.
    </p>

    {titulo === 'Galería' && (
      <img src={galeriaImg} alt="Galería" className="pagina-imagen" />
    )}
  </div>
);

export default Pagina;
