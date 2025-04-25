// components/Tabs.tsx
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Descripción');

  const tabs = [
    { title: 'Descripción', content: 'Este producto es un tanque de guerra de última generación con blindaje pesado.' },
    { title: 'Especificaciones', content: 'Velocidad máxima: 60km/h. Peso: 50 toneladas. Armamento: Cañón de 120mm.' },
    { title: 'Opiniones', content: '“Excelente rendimiento en el campo de batalla” – Usuario A.' }
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab.title)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.title ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="border p-4 rounded bg-gray-100">
        <p>{tabs.find(t => t.title === activeTab)?.content}</p>
      </div>
    </div>
  );
};

export default Tabs;
