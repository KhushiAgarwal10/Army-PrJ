import React from 'react';
import HeroSection from '../components/HeroSection';
import WarCard from '../components/WarCard';
import MissionCard from '../components/MissionCard';
import AwardCard from '../components/AwardCard';
import TimelineCard from '../components/QuizCard';
import { Link } from 'react-router-dom';
import QuizOverviewCard from '../components/QuizOverviewCard';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />

      {/* Inspirational Quote */}
      <section className="bg-gradient-to-r from-orange-500 via-white to-green-600 py-10 px-4 text-center shadow-inner border-b-4 border-orange-400">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl font-semibold italic leading-relaxed text-gray-900 animate-fade-in">
            “Either I will come back after hoisting the Tricolor, or I will come back wrapped in it. But I will come back for sure.”
          </p>
          <p className="mt-4 text-lg sm:text-xl font-medium text-black">
            — Captain Vikram Batra
          </p>
        </div>
      </section>
      {/* 4 Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 transform transition-transform duration-300 hover:scale-105">
        <WarCard />
        <MissionCard />
        <AwardCard />
        <TimelineCard />
      </section>



      {/* Tribute to Martyrs Section */}
      <section className="bg-yellow-200 text-green-800 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Salute to the Martyrs</h2>
        <p className="italic text-gray-800 mb-6">"They gave their today for our tomorrow."</p>
        <img
          src='https://media.istockphoto.com/id/802504394/photo/amar-jawan-jyoti-in-jallianwala-bagh-memorial-in-amritsar-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=vXT6gtUza-Cf0WH4rUveTJ7uZRgfl9RWm6w53Pff4OI='
          alt="Amar Jawan Jyoti"
          className="mx-auto w-60 sm:w-80 rounded shadow-lg"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-green-800">1.4M+</h3>
            <p className="text-gray-700">Active Soldiers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-800">21</h3>
            <p className="text-gray-700">Wars Fought</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-800">3000+</h3>
            <p className="text-gray-700">Gallantry Awards</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-800">45+</h3>
            <p className="text-gray-700">Peace Missions</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Gallery Preview</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1521726834835-4ff1624e69da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFybXl8ZW58MHx8MHx8fDA%3D" alt="Army" className="rounded-lg shadow-md hover:scale-105 transition" />
          <img src="https://images.unsplash.com/photo-1588450248442-1c8357368dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29sZGllcnN8ZW58MHx8MHx8fDA%3D" alt="Soldiers" className="rounded-lg shadow-md hover:scale-105 transition" />
          <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Flag" className="rounded-lg shadow-md hover:scale-105 transition" />
          <img src="https://media.istockphoto.com/id/154947932/photo/soldiers-marching-in-line.webp?a=1&b=1&s=612x612&w=0&k=20&c=Sr_R5MBYiZ0p5QVYYDmauTY203dYgBLG-5f_RJEF5bA=" alt="March" className="rounded-lg shadow-md hover:scale-105 transition" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-100 py-8 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Want to learn more about our heroes?</h2>
        <p className="mb-4">Dive deeper into the history, valor, and legacy of the Indian Army.</p>
        <Link to="/contact" className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
          Contact Us
        </Link>
      </section>

      {/* Join the Army Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 text-white text-center"

      >
        <div className="bg-black bg-opacity-50 px-4 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">“Service Before Self”</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            The Indian Army isn't just a job — it's a duty, a calling, a life of honor and courage. Are you ready?
          </p>
          <Link
            to="/missions"
            className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Explore Missions
          </Link>
        </div>

        <div className="mt-10">
          {/* Your other sections */}
          <QuizOverviewCard />
        </div>

      </section>



    </div>

  );
}

