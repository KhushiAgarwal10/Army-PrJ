import React from 'react';

export default function MissionOverviewCard({ title, year, description, image, wiki }) {
  return (
    <div className="bg-white border border-green-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-700">{title} <span className="text-sm text-gray-500">({year})</span></h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <a
          href={wiki}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-green-600 hover:underline text-sm font-medium"
        >
          🔗 Read more on Wikipedia
        </a>
      </div>
    </div>
  );
}
