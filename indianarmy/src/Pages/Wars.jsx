import React from 'react';
import WarOverviewCard from '../components/WarOverviewCard';
import wars from '../data/Wars'; // ✅ your JS data file

export default function Wars() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Wars Fought by the Indian Army</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wars.map((war, index) => (
          <WarOverviewCard
            key={index}
            title={war.title}
            description={war.description}
            image={war.image}
            url={war.url}
          />
        ))}
      </div>
    </div>
  );
}


