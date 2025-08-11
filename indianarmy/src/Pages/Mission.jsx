import React from 'react';
import mission from '../data/Missions.js';
import MissionOverviewCard from '../components/MissionOverviewCard';

export default function Mission() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        🪖 Military Missions of India
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mission.map((mission, index) => (
          <MissionOverviewCard key={index} {...mission} />
        ))}
      </div>
    </div>
  );
}
