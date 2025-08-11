import React from 'react';

export default function AwardOverviewCard({ name, image, description, href }) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <img src={image} alt={name} className="w-full h-48 object-contain rounded-lg mb-4" />
      <h2 className="text-xl font-bold text-green-700">{name}</h2>
      <p className="text-sm mt-2 text-gray-600">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm text-white font-semibold bg-green-700 px-4 py-2 rounded hover:bg-green-800 transition"
      >
        Learn More →
      </a>
    </div>
  );
}
