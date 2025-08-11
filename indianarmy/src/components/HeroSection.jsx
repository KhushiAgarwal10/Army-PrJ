// components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-[url('/Images/flag.jpg')] bg-cover bg-center min-h-[70vh] flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tribute to the Indian Army</h1>
        <p className="text-lg sm:text-xl mb-6">Saluting the bravery, sacrifice, and honor of our soldiers.</p>
        <Link
          to="/wars"
          className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          Explore Wars
        </Link>
      </div>
    </section>
  );
}
