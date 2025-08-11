import React from 'react';
import Awards from '../data/Awards.js';
import AwardOverviewCard from '../components/AwardOverviewCard.jsx';

export default function Award() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        🏅 Gallantry Awards of India
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Awards.map((award, index) => (
          <AwardOverviewCard
            key={index}
            name={award.name}
            image={award.image}
            description={award.description}
            href={award.wiki}
          />
        ))}

      </div>
    </div>
  );
}



