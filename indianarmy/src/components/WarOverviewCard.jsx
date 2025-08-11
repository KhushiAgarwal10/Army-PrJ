// src/components/WarCard.jsx
import React from 'react';

export default function WarCard({ title, description, image, url }) {
  return (
    <div className="bg-white border-l-4 border-green-800 p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
      <img
        src={image}
        alt={title}
        className='w-full h-48 object-cover rounded mb-3'
      />
      <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-green-700 font-semibold hover:underline"
      >
        Explore More →
      </a>
    </div>
  );
}
